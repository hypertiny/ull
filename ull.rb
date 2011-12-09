require 'rubygems'
require 'sinatra'
require 'erb'

get '/' do
  erb :'teaser/index', :layout => false
end

get '/main' do
  erb :'main/index', :layout => :'main/layout'
end