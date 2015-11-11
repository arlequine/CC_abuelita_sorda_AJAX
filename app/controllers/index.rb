get '/' do
  @abuelita = params[:abuelita]
  
  erb :index
  
  # Visita app/views/index.erb
end

post '/abuelita' do

  p "x"*100
  p params

  user_input = params[:user_input]
  nieto = nil
  nieto = user_input

  response = grandma_response(nieto)
  
  p request
  if request.xhr?
    response
  else
    redirect to "/?abuelita=#{response}" 
  end

end


def grandma_response(nieto)
  if  nieto == "BYE"
    'BYE' 
  elsif nieto == nieto.upcase
    'NO DESDE 1983'
  else
    'NO TE ESCUCHO HIJO'
  end
end