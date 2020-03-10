const  String addPropertyQuery = r"""
        mutation addProperty(
          $phone: String!
          $name: String!
          $email: String!
          $street: String!
          $rules: String
          $phoneCountry_code: String!
          $terms: String
          $country: String!
        ){
        createProperty(name: $name,
        phone_number: $phone, email: $email, street: $street, 
          terms: $terms, phone_country_code: $phoneCountry_code,
          country: $country, rules: $rules){
          id
          name
          email
        }
        }
          """;

          const  String updatePropertyQuery = r"""
            mutation updateProperty($id : String!
              $user_id: String!
              $name: String!
                $phone: String!
                $email: String!
                $street: String!
                $phoneCountry_code: String!
                $country: String!
                $rules: String
                $terms: String
            ){
              updateProperty(id: $id, user_id: $user_id, name: $name,
              phone_number: $phone, email: $email, street: $street, 
               phone_country_code: $phoneCountry_code,
                country: $country, rules: $rules, terms: $terms,){
                user_id
                name
              }
            }
          """;

const String getProperties = r"""
   query{
  getUserProperties{
    id
    name
    phone{
      country_code
      phone_number
      complete_phone
    }
    address{
      street
      country
    }
    email
    terms  
    rules  
  }
}
 """;

 const String addReservationQuery = r"""
       mutation addReservation(
              $property_id: String!
              $name: String!
              $booking_channel: String!
              $checkin_date: String!
              $checkout_date: String!
              $instruction: String!
            ){
              createReservation(property_id: $property_id,
              name: $name, booking_channel: $booking_channel, 
                checkin_date: $checkin_date, instruction: $instruction,
                checkout_date: $checkout_date){
                user_id
                name
                checkin_url
              }
            }
 """;

 const String getReservationsQuery = r"""
query{
  getReservations{
    name
    id
    checkin_url
    checkedin_at
    checkout_date
    checkin_date
    approved
    already_checkedin
    instruction
    booking_channel
    property{
      id
      name
    }
    guests{
      user_id
      name
    }
  }
}
 """;

const String getBookingChannel = r"""
   query{
  getBookingChannels{
    channel_code
    channel_name
}
  }
 """;



