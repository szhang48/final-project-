class CommentsController < ApplicationController
    
    skip_before_action :authorized_user, only: [:index, :create, :des]
    def index 
        render json: Comment.all 
    end

    def show 
        comment = Comment.find(params[:id])
        render json: comment, status: 200
    end

    def create 
        comment = Comment.create!(comment_params)
        render json: comment.post, status: 200
    end
    
    def destroy 
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content 
    end

    private 
    def comment_params
        params.permit(:user_id, :text, :post_id)
    end
end
