class individu {
    static CUSTOMER_ROLE_ID = "ca2c1507-d542-4f47-bb63-a9c44a536498";
  
    constructor(id, gender, firstname, lastname, birthyear, height, weightStart, weightGoal, bmiStart, bmiGoal, activityProfile, email, id = null) {
      this.gender = gender;  
      this.firstname = firstname;
      this.lastname = lastname;
      this.birthyear = birthyear;
      this.height =height;
      this.weightStart = weightStart;
      this.weightGoal = weightGoal;
      this.bmiStart = bmiStart;
      this.bmiGoal = bmiGoal;
      this.activityProfile = activityProfile; 
      this.email = email;
      this.id = id;
      this.role = User.CUSTOMER_ROLE_ID; //customer role
    }
  }
  
  export default individu;