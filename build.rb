#!/usr/bin/env ruby

require './ull'
require 'rack/test'
browser = Rack::Test::Session.new(Rack::MockSession.new(Sinatra::Application))
browser.get '/'
File.open('public/index.html','w') do |file|
  file.write(browser.last_response.body)
end
