class OwnSneakersController < ApplicationController

    skip_before_action :authorized_user

    def index 
        render json: OwnSneaker.all
    end

    def show 
        own_sneaker = OwnSneaker.find(params[:id])
        render json: own_sneaker, status: 200
    end

    def create 
        own_sneaker = OwnSneaker.create!(own_sneaker_params)
        render json: own_sneaker.post, status: :created
    end
    
    def destroy 
        own_sneaker = OwnSneaker.find(params[:id])
        own_sneaker.destroy
        head :no_content
    end

    private 
    def own_sneaker_params
        params.permit(:user_id, :sneaker_id)
    end
end
