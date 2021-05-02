<<<<<<< HEAD
package model;

public class Nurse extends User {

    private String speciality;

    public Nurse(String name, String email) {
        super(name, email);
    }

    @Override
    public void showDatUser() {
        System.out.println("Hospital: Crux Verde");
        System.out.println("Departamentos: Nutrilogía");
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }
}
=======
package model;

public class Nurse extends User {

    private String speciality;

    public Nurse(String name, String email) {
        super(name, email);
    }

    @Override
    public void showDatUser() {
        System.out.println("Hospital: Crux Verde");
        System.out.println("Departamentos: Nutrilogía");
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }
}
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
