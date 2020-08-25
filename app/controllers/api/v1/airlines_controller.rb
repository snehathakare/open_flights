module Api
    module V1
        class AirlinesController < ApplicationController

            def index
                airlines = Airline.all
                render json: AirlineSerializer.new(airlines).serialized_json
            end

            def show
                airline = Airline.find_by(slug: params[:slug])
                render json: AirlineSerializer.new(airline).serialized_json
            end

            def create
                airline = Airline.new(airlines_params)
                if airline.save
                    render json: AirlineSerializer.new(airline).serialized_json
                end
            end

            def update
                airline = Airline.find_by(slug: params[:slug])
                if airline.update(airlines_params)
                    render json: AirlineSerializer.new(airline).serialized_json
                end
            end

            def destroy
                airline = Airline.find_by(slug: params[:slug])
                airline.destroy
                redirect_to root_path
            end

            private

            def airlines_params
                params.require(:airline).permit(:name, :image_url)
            end

        end
    end
end