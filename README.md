**Emergency** is a real-time communication platform designed to empower individuals and rescue teams during natural disasters like typhoons, floods, or earthquakes. By integrating a map-based interface, instant messaging, video updates, and community-driven support features, Emergency ensures seamless coordination and life-saving communication in crisis zones.

---

## 🚀 Features

### 🌐 Real-Time Disaster Map

- **Pin Critical Locations**: Mark rescue points, danger zones, medical stations, or resource hubs on an interactive map.
- **Live Updates**: View real-time changes as users and responders update the map.

### 💬 Instant Messaging

- **Group & Private Chats**: Coordinate with rescue teams, families, or communities.
- **End-to-End Encryption**: Secure communication for sensitive information.

### 📹 Video Updates

- **Upload Urgent Video Alerts**: Share visual confirmations of emergencies (e.g., blocked roads, flooded areas).
- **Verify Needs**: Rescue teams can prioritize requests based on video evidence.

### 📢 Community Posts

- **Share Information**: Post updates about shelter availability, missing persons, or resource needs.
- **Crowdsourced Data**: Aggregate user reports to identify high-risk areas.

### ❤️ Donation Integration

- **Support Rescue Efforts**: Directly donate to verified NGOs or local rescue teams.
- **Transparent Tracking**: See how donations are utilized in real time.

---

## ⚙️ Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/mxber2022/ETHGlobalTaipei
   cd ETHGlobalTaipei
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Set Up Environment Variables**

   - Create `.env` files in `client` and `server` directories.
   - Include keys for:
     - Mapbox API (for the interactive map)
     - Firebase (video storage)
     - Stripe (donations)
     - JWT Secret (authentication)

4. **Run the Application**

   ```bash
   pnpm dev
   ```

## 🛠️ Usage

- **Sign Up/Log In**: Login using world app.
- **Map Interface**: Zoom into disaster-affected areas. Click to drop a pin with details (e.g., "Medical Supplies Needed Here").
- **Messaging & Video**: Join region-specific chat groups. Upload short videos via the "Urgent Alert" button.
- **Create Posts**: Share text/photos about missing persons, resources, or hazards.
- **Donate**: Navigate to the "Support" tab to contribute securely.

## 🌟 Contributing

We welcome contributions! To help improve Emergency:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

See `CONTRIBUTING.md` for guidelines.

## 📄 License

This project is licensed under the MIT License. See `LICENSE` for details.

## 🙏 Acknowledgments

- Mapbox for the interactive map integration.
- Firebase for real-time database and video storage.
- Stripe for secure donation processing.
- Open-source communities for invaluable tools and libraries.

Together, we can save lives. Stay safe. Stay connected. 🔗
