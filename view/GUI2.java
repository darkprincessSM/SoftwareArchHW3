package view;

import javax.swing.ImageIcon;
import javax.swing.JFrame;

public class GUI2 {
    
    public GUI2() {
        startGui();
    }
    
    public void startGui() {
        JFrame window = new JFrame();
        ImageIcon pipePic = new ImageIcon("pipe.png");
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        window.setLocation(400, 100);
        window.setIconImage(pipePic.getImage());
        window.setTitle("Pipes and filters");

        Panel panel = new Panel(window);
        panel.init();

        window.pack();
        window.setVisible(true);
        //window.setResizable(false);

    }
    




}
