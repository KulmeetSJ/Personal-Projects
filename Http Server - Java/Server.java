import java.net.ServerSocket;
import java.net.Socket;
import java.io.IOException;
import java.util.Date;
// import java.io.InputStreamReader;
// import java.io.BufferedReader;

public class Server {
    public static void main(String[] args) throws Exception {
        final ServerSocket server = new ServerSocket(8080);
        System.out.println("Listening for connection on port 8080....");

        while (true) {
            // Socket clientSocket = server.accept();

            // InputStreamReader isr = new InputStreamReader(clientSocket.getInputStream());

            // BufferedReader reader = new BufferedReader(isr);
            // String line = reader.readLine();
            // while (!line.isEmpty()) {
            //     System.out.println(line);
            //     line = reader.readLine();
            // }
            try (Socket clientSocket = server.accept()) {
                Date dt = new Date();
                String httpResponse = "HTTP/1.1 200 OK\r\n\r\n" + dt;
                clientSocket.getOutputStream().write(httpResponse.getBytes("UTF-8"));
            }
        }
    }
}