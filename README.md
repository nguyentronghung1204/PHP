# 📝 PHP To-Do List Application

A simple and elegant to-do list application built with HTML, CSS, and JavaScript featuring local storage functionality for persistent task management.

## ✨ Features

- ✅ **Add Tasks** - Easily add new tasks with a simple input field
- ☑️ **Mark Complete** - Toggle task completion status with visual feedback
- 🗑️ **Delete Tasks** - Remove individual tasks from your list
- 💾 **Local Storage** - Automatically saves tasks to browser storage for persistence
- 📊 **Task Statistics** - View total, completed, and remaining tasks
- 🎨 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🌈 **Modern UI** - Beautiful gradient background and smooth animations

## 📁 Project Structure

```
PHP/
├── index.html      # Main HTML file
├── style.css       # CSS styling and responsive design
├── script.js       # JavaScript logic and local storage
└── README.md       # Project documentation
```

## 🚀 How to Use

### Option 1: Direct Browser
1. Clone the repository:
   ```bash
   git clone https://github.com/nguyentronghung1204/PHP.git
   cd PHP
   ```
2. Open `index.html` in your web browser

### Option 2: Local Server
1. Using Python 3:
   ```bash
   python -m http.server 8000
   ```
2. Visit `http://localhost:8000` in your browser

### Option 3: Using VS Code Live Server
1. Install Live Server extension
2. Right-click on `index.html` and select "Open with Live Server"

## 💻 Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with gradients and flexbox
- **JavaScript (ES6)** - Object-oriented programming with classes
- **Local Storage API** - Client-side data persistence

## 🎯 Key Features Explained

### Local Storage
Tasks are automatically saved to the browser's local storage:
```javascript
localStorage.setItem('toDoTasks', JSON.stringify(this.tasks));
```

### Task Management
Each task has:
- Unique ID (timestamp-based)
- Text content
- Completion status
- Creation date

### Statistics
Real-time display of:
- Total number of tasks
- Number of completed tasks
- Number of remaining tasks

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (below 768px)

## 🔒 Data Security

- No data is sent to external servers
- All data is stored locally in your browser
- Clear your browser data to reset tasks

## 🎨 Customization

### Change Colors
Edit the gradient in `style.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add New Features
Extend the `ToDoList` class in `script.js` with new methods

## 📝 Example Usage

```javascript
// Create new to-do list instance
const toDoList = new ToDoList();

// Add a task
toDoList.addTask();

// Toggle task completion
toDoList.toggleTask(taskId);

// Delete a task
toDoList.deleteTask(taskId);
```

## 🐛 Troubleshooting

### Tasks not saving?
- Check if Local Storage is enabled in your browser
- Clear browser cache and try again

### Styling looks wrong?
- Make sure `style.css` is in the same directory as `index.html`
- Refresh the page (Ctrl+F5 or Cmd+Shift+R)

### JavaScript not working?
- Ensure `script.js` is in the same directory
- Check browser console for errors (F12)

## 🚀 Future Enhancements

- [ ] Task priority levels
- [ ] Due dates and reminders
- [ ] Task categories/tags
- [ ] Search and filter functionality
- [ ] Dark mode toggle
- [ ] Export tasks to CSV
- [ ] Cloud sync with backend
- [ ] Drag and drop reordering

## 📄 License

Open source and available for personal and commercial use.

## 👨‍💻 Author

**Nguyễn Trọng Hưng** 

- GitHub: [@nguyentronghung1204](https://github.com/nguyentronghung1204)

## 🤝 Contributing

Feel free to fork and submit pull requests for improvements!

---

**Made with ❤️ by Nguyễn Trọng Hưng**
**Good luck**
