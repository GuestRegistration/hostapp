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
              $name: String!
                $phone: String!
                $email: String!
                $street: String!
                $phoneCountry_code: String!
                $country: String!
                $rules: String
                $terms: String
            ){
              updateProperty(id: $id, name: $name,
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
    reservations{
      id
      name
      checkin_date
      checkout_date
    }
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
query getData($property_id: String!){
    getPropertyReservations(id: $property_id){
    id
    name
    booking_channel
    already_checkedin
    checkedin_at
    checkin_date
    checkin_url
    approved
    instruction
    checkout_date
    property{
      id
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

 const String getReservationCheckin = r"""
 query getReservationCheckin($id: String!){
  getReservationCheckin(id: $id){
    user{
      phone
      name{
        first_name
        last_name
      }
    }
    reservation{
      name
    }
    identity{
      country
      user_id
      document_type
      document_url
    }
  }
}
 """;

  const String selectdata = r"""
              query($email: String!) {       
              getUserByEmail(email: $email){
              email
      				id
              name{
                first_name
                last_name
              }
              phone{
                phone_number
                country_code
                complete_phone
              }
              }
            }
              """;
 const String getphone = r"""
          query($phone: String!){
  getUserByPhone(phone: $phone){
    phone{
          phone_number
          country_code
          complete_phone
              }
  }
}
""";
const String insertData = r"""
        mutation users(        
        $id: String!       
         $phone_number: String!
         $phone_country_code: String!
         $email: String!
         $name: String!
         $lastname: String!){
           createUser( 
             id:$id,
             email: $email,
             phone_country_code: $phone_country_code,
          phone_number: $phone_number, first_name:$name, last_name:$lastname
        ){ 
          id
          email
          country_of_residence
          name{
            first_name
            last_name
          }       
          phone{
          phone_number
          country_code
          complete_phone
              }
                }
        }
          """;
   const String updateuserquery = r"""
 mutation($email: String!,$id:String!,
  $phone_number: String!,
   $phone_country_code: String!,
 $first_name:String!,$last_name:String!){
  updateUser(email:$email,id:$id,first_name:$first_name,last_name:$last_name,
  phone_country_code: $phone_country_code,
          phone_number: $phone_number){
     id
          email
          country_of_residence
          name{
            first_name
            last_name
          }       
          phone{
          phone_number
          country_code
          complete_phone
              }
                }
        }
 """;



