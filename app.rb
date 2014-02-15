class AceAttorneyClone < Sinatra::Base
  get '/' do
    erb :main
  end
end