class UserDetails {
  final String id;
  final String email;

  UserDetails({this.id, this.email,});

  UserDetails.fromData(Map<String, dynamic> data)
      : id = data['id'],
        email = data['email'];


  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'email': email
    };
  }
}
