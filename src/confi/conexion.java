package confi;

import java.sql.Connection;
import java.sql.DriverManager;

public class conexion {

    Connection con;

    public conexion() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(
                "jdbc:mysql://jose-lab.ctuha4yqxpmx.us-east-1.rds.amazonaws.com:3306/GRANHOTELVILLADELSUR", 
                "admin", 
                "Proyectoh6622+"
            );
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Connection getConnection() {
        return con;
    }

    public static void main(String[] args) {
        conexion conexion = new conexion();
        Connection con = conexion.getConnection();
        if (con != null) {
            System.out.println("Exito");
        } else {
            System.out.println("Fallo");
        }
    }
}