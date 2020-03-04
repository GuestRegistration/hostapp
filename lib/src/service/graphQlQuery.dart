const  String addPropertyQuery = r"""
        mutation addProperty($userID : String!
          $phone: String!
          $name: String!
          $email: String!
          $street: String!
          $rules: String
          $phoneCountry_code: String!
          $terms: String
          $country: String!
        ){
        createProperty(user_id: $userID,name: $name,
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
  getProperties{
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
              $user_id: String!
              $property_id: String!
              $name: String!
              $email: String!
              $booking_channel: String!
              $booking_no: String!
              $amount_paid: Int!
              $checkin_date: String!
              $checkout_date: String!
              $instruction: String!
            ){
              createReservation(user_id: $user_id, property_id: $property_id,
              name: $name, email: $email, booking_channel: $booking_channel, 
                booking_no: $booking_no, amount_paid: $amount_paid, 
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
  }
}
 """;



