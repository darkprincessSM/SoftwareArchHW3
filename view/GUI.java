import javax.swing.JFrame;

public class GUI {
     
    //private JFrame window;
    
    public GUI() {
        startGui();
    }
    
    public void startGui() {
        JFrame window = new JFrame();
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        window.setLocation(400, 100);
        window.setTitle("Pipes and filters");

        window.pack();
        window.setVisible(true);

    }
    




}
