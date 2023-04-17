# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# I will make a function called find_letter, that has parameters array and letter, which uses the select method on our array.
# The select method will search each index of the array, and select only those entires which .include? the given letter.

def find_letter array, letter
    array.select { |word| word.include? letter}
end

p find_letter(beverages_array, letter_o)
p find_letter(beverages_array, letter_t)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# I will create a method that takes in the hash, and extracts the values with .value. Then, I will usse .flatten to get rid of the nested arrays, turning it into one array with each value. Finally, I will .sort.

def unload_hash hash
    hash.values.flatten.sort
end

p unload_hash(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# I will create the class with one expected argument for the model, and a method that uses string interpolation to return the bike's info.

class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster num
        @current_speed += num
        p "New speed is #{@current_speed} mph."
    end
    def brake num
        @current_speed -= num
        if @current_speed < 0 
            @current_speed = 0
        end
        p "New speed is #{@current_speed} mph."
    end
end

my_bike = Bike.new('Trek')
p my_bike.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# I will create the method pedal_faster, which takes in a number, and adds it to current_speed, then prints the new speed.
# For brake, I will subtract the given num from current_speed, then set current_speed to 0 if it is negative. 

my_bike.pedal_faster(10)
my_bike.pedal_faster(18)
my_bike.brake(5)
my_bike.brake(25)