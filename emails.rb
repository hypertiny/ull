require 'ull'
Registration.all.each do |r|
  puts r.email
end
puts "#{Registration.count} emails"
