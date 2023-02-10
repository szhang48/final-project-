class WantSneakersController < ApplicationController

    skip_before_action :authorized_user

    def index 
        render json: WantSneaker.all 
    end

    def create 
        want_sneaker = WantSneaker.create!(want_sneaker_params)
        render json: want_sneaker.post, status: :created

    end

    def destroy 
        want_sneaker = WantSneaker.find(params[:id])
        want_sneaker.destroy
        head :no_content
    end

    private 
    def want_sneaker_params
        params.permit(:user_id, :sneaker_id)
    end
end
