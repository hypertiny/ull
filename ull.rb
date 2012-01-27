require 'rubygems'
require 'sinatra'
require 'erb'

def use_db?
  ENV['RACK_ENV'] == 'production' || ENV['DB'] == true
end

if use_db?

  require 'data_mapper'
  DataMapper.setup(:default, ENV['DATABASE_URL'] || 'postgres://ull:@localhost/ull')

  class Registration
      include DataMapper::Resource
      property :id, Serial
      property :email, String, :index => :unique
      property :created_at, DateTime
  end

  Registration.auto_migrate! unless Registration.storage_exists?

  DataMapper.finalize
end

get '/' do
  erb :'teaser/index', :layout => :'teaser/layout'
end

get '/main' do
  erb :'main/index', :layout => :'main/layout'
end

get '/register' do
  redirect 'https://ull.tito.io'
end

post '/' do
  if params[:email].strip != '' and use_db?
    if !Registration.first(:email => params[:email])
      Registration.create(:email => params[:email])
    end
  end
  erb :'teaser/thanks', :layout => :'teaser/layout'
end