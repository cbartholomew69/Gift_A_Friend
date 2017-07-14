class UsersController < ApplicationController
    before_action :authenticate_user!, :except => [:show]
    
    def profile
        if user_signed_in?
            
            @user = User.find(current_user.id)
            puts @user.address
            render json: {
                user: @user
            }
        else
            render status: 500,
                json: {
                    error: 'no user signed in'
                }
        end
    end
    
    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find(params[:id])
         render json: @user

    end

    def create
        @user = User.new(user_params)
        if @user.save
            render json: [
                user: @user
            ]
        else
            render status: 500,
                    json: {
                      error: @user.errors
                    }
        end
    end

    def update
        @user = User.find(params[:id])
        @user.update!(user_params)
        if @user.save
            puts @user.address
            render json: {
                user: @user
            }
        else
            render status: 500,
                json: {
                     error: @user.errors
            }  
        end     
    end
    
    def destroy
        @user = User.find(params[:id])
        if @user.destroy
            render json: [
                message: 'Successfully deleted event'
            ] 
        else
          render status: 500, 
                 json: {
                   error: 'Could not delete Event'
                }
        end        
    end

    private

    def user_params
        params.require(:user).permit(:id, :username, :first_name, :last_name, :city, :address, :gender)
    end
end