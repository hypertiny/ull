require 'rubygems'
require 'sinatra'
require 'erb'
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

get '/' do
  erb :'teaser/index', :layout => :'teaser/layout'
end

get '/main' do
  erb :'main/index', :layout => :'main/layout'
end

post '/' do
  if params[:email].strip != ''
    if !Registration.get(:email => params[:email])
      Registration.create(:email => params[:email])
    end
  end
  erb :'teaser/thanks', :layout => :'teaser/layout'
end