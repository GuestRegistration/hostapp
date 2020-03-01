const  String addPropertyQuery = r"""
        mutation addProperty($userID : String!
          $name: String!
          $phone: String!
          $email: String!
          $street: String!
          $city: String!
          $state: String!
          $phoneCountry_code: String!
          $country: String!
          $postal_code: Int!
        ){
        createProperty(user_id: $userID,name: $name,
        phone_number: $phone, email: $email, street: $street, 
          city: $city, state: $state, phone_country_code: $phoneCountry_code
          country: $country, postal_code: $postal_code){
          id
          name
          email
          address{
            country
            city
          }
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
                $city: String!
                $phoneCountry_code: String!
                $state: String!
                $country: String!
                $postal_code: Int!
            ){
              updateProperty(id: $id, user_id: $user_id, name: $name,
              phone_number: $phone, email: $email, street: $street, 
                city: $city, state: $state, phone_country_code: $phoneCountry_code
                country: $country, postal_code: $postal_code){
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
            ){
              createReservation(user_id: $user_id, property_id: $property_id,
              name: $name, email: $email, booking_channel: $booking_channel, 
                booking_no: $booking_no, amount_paid: $amount_paid, 
                checkin_date: $checkin_date,
                checkout_date: $checkout_date){
                user_id
                name
                checkin_url
              }
            }
 """;



