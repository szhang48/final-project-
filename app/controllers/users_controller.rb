class UsersController < ApplicationController
    skip_before_action :authorized_user

    def index 
        render json: User.all, status: :ok
    end

    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end

    def create 
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private 
    def user_params
        params.permit(:username, :password, :age, :city, :avatarUrl, :bio)
    end
end
