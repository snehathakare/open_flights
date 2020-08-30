module Api
    module V1
        class ReviewsController < ApplicationController
            def create
                review = airline.reviews.new(review_params)
                if review.save
                    render json: ReviewSerializer.new(review).serialized_json
                end
            end

            def destroy
                review = Review.find(params[:id])
                review.destroy
                redirect_to root_path
            end

            private

            def airline
                @airline ||= Airline.find(params[:airline_id])
            end

            def review_params
                params.require(:review).permit(:title, :description, :score, :airline_id)
            end

        end
    end
end