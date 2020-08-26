module Api
    module V1
        class ReviewsController < ApplicationController
            def create
                review = Review.find(params[:id])
                if review.update(review_params)
                    render json: ReviewSerializer.new(review).serialized_json
                end
            end

            def destroy
                review = Review.find(params[:id])
                review.destroy
                redirect_to root_path
            end

            private

            def review_params
                params.require(:review).permit(:title, :description, :score, :airline_id)
            end

        end
    end
end