class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    before_action :authorized_user

    def current_user
        user = User.find_by(id:session[:user_id])
        user
    end

    def authorized_user
        render json:{error:"Not authorized"}, status: :unauthorized unless current_user
    end

    private 
    def render_unprocessable_entity_response(invalid)
            render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
     end 
  
    def render_not_found_response(invalid)
        render json: {error: "#{invalid.model} not found"}, status: :not_found
     end 
end
