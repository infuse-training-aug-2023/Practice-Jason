require 'json'

timestamp = Time.now.utc.to_i

json_file = File.read("data.json")
data = JSON.parse(json_file)

first_name = data["name"].split(" ")[0]
last_name = data["name"].split(" ")[1]

data.delete("name")

data["first_name"] = first_name
data["last_name"] = last_name

your_name= "jason"

File.open("#{your_name}_#{timestamp}.json", "w") do |f|
    f.write(JSON.generate(data))
  end