class UsersController < ApplicationController
    before_action :authenticate_user!, :except => [:show]
    
#     def show
#         user = User.find(params[:id])
#             render json: user
#     end
# end

 def index
        @users = Events.all
        rendor json: @users
    end

    def create
        @user = User.create!(event_params)
        redirect_to user_path(@event)
    end

    def show
        @user = User.find(params_[:id])
        rendor json: @user

    end

    def update
        @user = User.find(params[:id])
        @user.update!(user_params)
        redirect_to user_path(@user)
    end
    
    def destroy
        @user = User.find(params[:id])
        @user.destroy
        redirect_to users_path
    end

    private

    def user_params
        params.require(:user).permit(:type)
    end
end