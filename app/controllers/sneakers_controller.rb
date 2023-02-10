class SneakersController < ApplicationController

    skip_before_action :authorized_user

    def index 
        render json: Sneaker.all
    end

    def show 
        sneaker = Sneaker.find(params[:id])
        render json: sneaker, status: 200 
    end

    
end
