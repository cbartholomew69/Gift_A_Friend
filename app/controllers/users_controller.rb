class UsersController < ApplicationController
    before_action :authenticate_user!, :except => [:show]
    
    def index
        @users = Users.all
        rendor json: @users
    end

    def show
        @user = User.find(params_[:id])
        rendor json: @user

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
        if @user.update(user_params)
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
        params.require(:user).permit(:category)
    end
end