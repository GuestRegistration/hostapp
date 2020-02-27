const  String addPropertyQuery = r"""
        mutation addProperty($userID : String!
          $name: String!
          $phone: String!
          $email: String!
          $street: String!
          $city: String!
          $state: String!
          $country: String!
          $postal_code: Int!
        ){
        createProperty(user_id: $userID,name: $name,
        phone: $phone, email: $email, street: $street, 
          city: $city, state: $state,
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
                $state: String!
                $country: String!
                $postal_code: Int!
            ){
              updateProperty(id: $id, user_id: $user_id, name: $name,
              phone: $phone, email: $email, street: $street, 
                city: $city, state: $state,
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
    phone
    address{
      street
      country
    }
    email
    terms    
  }
}
 """;



