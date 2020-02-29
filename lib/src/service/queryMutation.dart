class QueryMutation {
  String addPerson(String id, String name, String lastName, int age) {
    return """
      mutation{
          addPerson(id: "$id", name: "$name", lastName: "$lastName", age: $age){
            id
            name
            lastName
            age
          }
      }
    """;
  }

  String getAll(){
    return """ 
      {
        persons{
          id
          name
          lastName
          age
        }
      }
    """;
  }
  String selectdata = r"""
              query($email: String!) {       
              getUserByEmail(email: $email){
              email
              }
            }
              """;
  
}