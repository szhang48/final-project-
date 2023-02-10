class PostsController < ApplicationController
    
    skip_before_action :authorized_user

    def index 
        render json: Post.all
    end

    def show 
        post = Post.find(params[:id])
        render json: post, status: 200 
    end

    def create 
        post = Post.create!(post_params)
        render json: post.post, status: :created 
    end

    def update 
        post = Post.find(params[:id])
        post.update(post_params)
        render json: post, status: :ok
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy 
        head :no_content
    end

    private 
    def post_params
        params.permit(:title, :body, :user_id, :sneaker_id, :likes, :dislikes)
    end
end
