export const courseData = {
  title: "Roblox Game Development",
  description: "Create your own Roblox games with Lua scripting — turn your ideas into playable games millions can enjoy!",
  chapters: [
    {
      id: 1,
      title: "Welcome to Roblox Studio",
      lessons: [
        {
          id: "1-1",
          title: "What is Roblox Studio?",
          completed: false,
          content: {
            description: "Discover Roblox Studio — the FREE tool used to create every Roblox game! Learn to navigate, customize, and master your workspace like a professional developer.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll have Roblox Studio installed, understand the complete interface, and be ready to start building your first game world.

**Roblox Studio** is the official game creation engine behind every single Roblox experience. Whether it's Adopt Me, Brookhaven, Tower of Hell, or Blox Fruits — they were all built right here. And now it's your turn.

Think of Roblox Studio as your game-making workshop. It combines a 3D world editor (where you place objects, design landscapes, and build structures) with a powerful code editor (where you write Lua scripts to bring everything to life). Together, these tools give you everything you need to go from a blank canvas to a published game with millions of potential players.

What makes Roblox development special compared to other game engines like Unity or Unreal? Three things: **accessibility** (it's completely free), **audience** (over 70 million daily active players ready to play your game), and **monetization** (top developers earn millions through in-game purchases). You don't need a marketing budget or a publisher — you just need creativity and the skills you'll learn in this course.`
              },
              {
                type: "heading",
                level: 2,
                content: "Why Learn Roblox Development?"
              },
              {
                type: "list",
                items: [
                  "🎮 **Make real games** — Publish to 70+ million daily players instantly!",
                  "💰 **Earn Robux** — Top developers like Adopt Me creators earn millions yearly",
                  "💻 **Learn real coding** — Lua is used in professional game development, embedded systems, and more",
                  "🌍 **Massive community** — Millions of creators sharing knowledge and resources",
                  "🚀 **Portfolio builder** — Show colleges and employers real published games",
                  "🎨 **Creative freedom** — Build any genre: obbies, RPGs, simulators, horror, tycoons",
                  "📱 **Cross-platform** — Your game works on PC, Mac, mobile, Xbox, and VR automatically"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Installing Roblox Studio"
              },
              {
                type: "text",
                content: "Setting up Roblox Studio takes about 5 minutes. Here's the complete process:"
              },
              {
                type: "code",
                language: "text",
                filename: "installation_guide.txt",
                code: "Step-by-Step Installation:\n\n1. Open your browser and go to: https://create.roblox.com\n2. Sign in with your Roblox account (or create one — it's free!)\n3. Click 'Start Creating' or 'Download Studio'\n4. Run the installer (RobloxStudioLauncher.exe on Windows,\n   RobloxStudio.dmg on Mac)\n5. Studio will auto-update on first launch (may take 2-3 min)\n6. Sign in again inside Studio if prompted\n7. You're ready! Click 'New' to create your first project.\n\nSystem Requirements:\n• Windows 10+ or macOS 10.13+\n• 4GB RAM minimum (8GB recommended)\n• 1GB storage space\n• Internet connection required\n\nTroubleshooting:\n• If install fails → Run as Administrator (Windows)\n• If slow → Close other heavy apps during install\n• Mac security warning → Go to System Preferences → Security"
              },
              {
                type: "heading",
                level: 2,
                content: "The Studio Interface — Your Command Center"
              },
              {
                type: "text",
                content: "When you first open Studio, it can look overwhelming. Let's break down every panel so you know exactly what everything does:"
              },
              {
                type: "code",
                language: "text",
                filename: "interface_layout.txt",
                code: "┌──────────────────────────────────────────────────────────────┐\n│  FILE  HOME  MODEL  AVATAR  TEST  VIEW  PLUGINS             │\n├────────┬────────────────────────────────────┬─────────────────┤\n│        │                                    │                 │\n│ TOOL   │         VIEWPORT                   │  EXPLORER       │\n│ BOX    │     (3D Game World)                 │  (Object Tree)  │\n│        │                                    │                 │\n│ Free   │  Navigate with:                    │  game            │\n│ models │  • Right-click drag = rotate        │  ├── Workspace   │\n│ plugins│  • Scroll = zoom                   │  ├── Players     │\n│ assets │  • Middle-click drag = pan          │  ├── Lighting    │\n│        │                                    │  └── ...         │\n│        │                                    │                 │\n│        │                                    ├─────────────────┤\n│        │                                    │  PROPERTIES     │\n│        │                                    │  (Settings for  │\n│        │                                    │   selected      │\n│        │                                    │   objects)       │\n│        ├────────────────────────────────────┤                 │\n│        │  OUTPUT / COMMAND BAR              │                 │\n│        │  (Print messages, errors, scripts) │                 │\n└────────┴────────────────────────────────────┴─────────────────┘"
              },
              {
                type: "list",
                items: [
                  "**Viewport** (center) — Your 3D view of the game world. Right-click + drag to look around, scroll to zoom, middle-click to pan",
                  "**Explorer** (right) — Shows every object in your game as a tree structure. Think of it like a file explorer for your game",
                  "**Properties** (right, below Explorer) — Detailed settings for whatever object you've selected. Name, position, color, size, behavior — everything lives here",
                  "**Toolbox** (left) — A massive library of free models, plugins, images, and sounds from the Roblox community",
                  "**Output** (bottom) — Shows print() messages and error messages from your scripts. This is your debugging lifeline!",
                  "**Command Bar** (bottom) — Type Lua code here to run it instantly. Great for quick tests"
                ]
              },
              {
                type: "tip",
                content: "Can't find a panel? Go to the VIEW tab at the top and click the panel name to toggle it on. The most important panels to have open: Explorer, Properties, and Output."
              },
              {
                type: "heading",
                level: 2,
                content: "Navigating the 3D Viewport"
              },
              {
                type: "text",
                content: "Smooth viewport navigation is essential. Professional developers navigate their viewport without even thinking about it — it becomes muscle memory. Here are the controls you'll use hundreds of times per session. Practice these until they feel natural:"
              },
              {
                type: "code",
                language: "text",
                filename: "viewport_controls.txt",
                code: "Camera Controls:\n• Right-Click + Drag    → Rotate/look around\n• Scroll Wheel          → Zoom in/out\n• Middle-Click + Drag   → Pan (move sideways/up/down)\n• W/A/S/D + Right-Click → Fly through the world (FPS style)\n• Shift + movement      → Move camera slower (precision)\n• F                     → Focus on selected object\n\nPro Camera Tips:\n• Press F to snap the camera to whatever you've selected\n• Use View → Camera Speed to adjust fly speed\n• Ctrl+Shift+F → Toggle fullscreen viewport\n• Double-click an object in Explorer to zoom to it"
              },
              {
                type: "heading",
                level: 2,
                content: "Customizing Your Workspace"
              },
              {
                type: "text",
                content: "You can rearrange, resize, and dock panels to create a workspace that suits your workflow:"
              },
              {
                type: "code",
                language: "text",
                filename: "customize_workspace.txt",
                code: "CUSTOMIZING YOUR LAYOUT:\n━━━━━━━━━━━━━━━━━━━━━━━\n\n1. MOVE PANELS:\n   • Click and drag any panel's title bar\n   • Dock to left, right, top, bottom, or center\n   • Or leave floating as a separate window\n\n2. RESIZE PANELS:\n   • Drag the borders between panels\n   • Make Explorer wider when working with complex hierarchies\n   • Make Output taller when debugging scripts\n\n3. TOGGLE PANELS (View tab):\n   Essential panels to enable:\n   ✅ Explorer — Object hierarchy\n   ✅ Properties — Object settings\n   ✅ Output — Print messages & errors\n   ✅ Command Bar — Quick Lua commands\n   ✅ Toolbox — Free assets library\n\n   Useful but optional:\n   ☐ Script Analysis — Shows warnings in your code\n   ☐ Selection Details — Info about selected objects\n   ☐ Asset Manager — Manage uploaded images/sounds\n   ☐ Terrain Editor — Build landscapes\n\n4. SAVE YOUR LAYOUT:\n   • Studio remembers your layout between sessions\n   • Set up once, use forever!\n\nRECOMMENDED BEGINNER LAYOUT:\n┌──────────┬─────────────────┬──────────┐\n│ Toolbox  │    Viewport     │ Explorer │\n│          │   (3D World)    │ ──────── │\n│          │                 │Properties│\n│          ├─────────────────┤          │\n│          │ Output/Command  │          │\n└──────────┴─────────────────┴──────────┘"
              },
              {
                type: "heading",
                level: 2,
                content: "Using the Toolbox — Free Assets"
              },
              {
                type: "text",
                content: "The Toolbox is a massive library of free community-created assets. It's like an app store for game objects:"
              },
              {
                type: "code",
                language: "text",
                filename: "toolbox_guide.txt",
                code: "USING THE TOOLBOX:\n━━━━━━━━━━━━━━━━━\n\n1. Open: View → Toolbox (usually on the left)\n2. Search for anything: 'tree', 'car', 'sword', 'music'\n3. Click an item to add it to your game\n\nCATEGORIES:\n• Models    → 3D objects (buildings, characters, vehicles)\n• Images    → Decals, textures, icons\n• Meshes    → 3D shapes (more detailed than basic parts)\n• Audio     → Music, sound effects\n• Plugins   → Studio extensions\n\n⚠️ TOOLBOX SAFETY RULES:\n• ALWAYS check models for hidden scripts!\n  Right-click → Expand tree → look for Scripts\n• Delete any script you don't understand\n• Some models contain malicious code that can:\n  - Spam players\n  - Teleport players away\n  - Insert more bad scripts\n• Trusted creators: Roblox, verified accounts\n\nSAFE WORKFLOW:\n1. Add the model to your game\n2. Expand it in Explorer\n3. Delete ALL scripts inside it\n4. Keep only the visual parts you need\n5. Group into a Model (Ctrl+G)"
              },
              {
                type: "warning",
                content: "Never blindly trust Toolbox models! Some contain hidden malicious scripts that can ruin your game. Always expand models in Explorer and delete any Script, LocalScript, or ModuleScript you didn't write yourself. Only keep the visual parts (Parts, MeshParts, Decals, etc.)."
              },
              {
                type: "heading",
                level: 2,
                content: "Templates — Choosing Your Starting Point"
              },
              {
                type: "text",
                content: "When you click 'New', Studio offers several templates. Each gives you a different starting world:"
              },
              {
                type: "code",
                language: "text",
                filename: "templates_guide.txt",
                code: "Available Templates:\n\n• Baseplate       → Empty flat world (BEST FOR LEARNING!)\n                    Just a gray platform — you build everything\n\n• Flat Terrain    → Like baseplate but with grass terrain\n\n• Village         → Pre-built houses and paths\n                    Good for exploring what's possible\n\n• Castle          → Medieval castle environment\n\n• Obby            → Obstacle course starter with platforms\n\n• Racing          → Vehicle racing setup with track\n\n• Line Runner     → Infinite runner template\n\n• Capture the Flag → Team-based game starter\n\n★ FOR THIS COURSE: Start with BASEPLATE!\n  It's clean, simple, and lets you learn\n  without distractions."
              },
              {
                type: "warning",
                content: "Don't start with a complex template! It's tempting to use the Village or Castle template, but you'll learn much faster building from a blank Baseplate. Understanding how things work from scratch is what separates good developers from great ones."
              },
              {
                type: "heading",
                level: 2,
                content: "Understanding the Explorer Panel"
              },
              {
                type: "text",
                content: "The Explorer is the most important panel in Studio. It shows your game's hierarchy — every object, script, and asset organized in a tree structure. Think of it like a family tree for your game: everything is connected, and child objects are 'inside' their parent objects. When you move a Model in the viewport, all its children move with it. When you delete a parent, all children are deleted too."
              },
              {
                type: "code",
                language: "text",
                filename: "explorer_hierarchy.txt",
                code: "game (DataModel)\n├── Workspace              ← 3D objects live here (parts, models)\n│   ├── Camera\n│   ├── Terrain\n│   └── SpawnLocation      ← Where players appear\n├── Players                ← Connected players (empty in Studio)\n├── Lighting               ← Sky, ambient light, time of day\n├── ReplicatedFirst        ← Loads before anything else\n├── ReplicatedStorage      ← Shared assets (models, RemoteEvents)\n├── ServerScriptService    ← Server-only scripts (secure!)\n├── ServerStorage          ← Server-only assets\n├── StarterGui             ← UI screens given to each player\n├── StarterPack            ← Tools given to each player\n├── StarterPlayer          ← Player settings & scripts\n├── SoundService           ← Global sound settings\n└── Chat                   ← Chat system settings"
              },
              {
                type: "tip",
                content: "Press F5 to playtest your game instantly! Press Shift+F5 to stop the test. Press F8 to test with a simulated server and two clients — essential for testing multiplayer features. You'll use these shortcuts hundreds of times!"
              },
              {
                type: "heading",
                level: 2,
                content: "Essential Keyboard Shortcuts"
              },
              {
                type: "text",
                content: "Memorize these shortcuts to work 10x faster in Studio:"
              },
              {
                type: "code",
                language: "text",
                filename: "keyboard_shortcuts.txt",
                code: "GENERAL:\n━━━━━━━━\nCtrl+S          → Save project\nCtrl+Z          → Undo (use this A LOT!)\nCtrl+Y          → Redo\nCtrl+D          → Duplicate selected object\nDelete          → Delete selected object\nCtrl+G          → Group selected objects into Model\nCtrl+Shift+G    → Union selected parts\n\nTRANSFORM:\n━━━━━━━━━━\nCtrl+1          → Move tool\nCtrl+2          → Scale tool\nCtrl+3          → Rotate tool\nV               → Select tool\nF               → Focus camera on selection\n\nSCRIPTING:\n━━━━━━━━━━\nCtrl+/          → Comment/uncomment selected lines\nTab             → Indent code\nShift+Tab       → Remove indent\nCtrl+F          → Find text in script\nCtrl+H          → Find and replace\nCtrl+Shift+F    → Search ALL scripts\n\nTESTING:\n━━━━━━━━\nF5              → Play test (client)\nShift+F5        → Stop test\nF6              → Play test (server view)\nF8              → Test with server + 2 clients\nF9              → Open Developer Console (in-game)"
              },
              {
                type: "heading",
                level: 2,
                content: "Studio Settings Worth Changing"
              },
              {
                type: "code",
                language: "text",
                filename: "studio_settings.txt",
                code: "Go to File → Studio Settings:\n\n1. RENDERING:\n   • Quality Level: 21 (maximum for design work)\n   • EditQualityLevel: Full for best visuals\n\n2. SCRIPT EDITOR:\n   • Font: Source Code Pro or Fira Code\n   • Tab Width: 4 (industry standard)\n   • Script Editor Color Preset: Dark (easier on eyes)\n   • Show plus button on hover: ON\n\n3. PHYSICS:\n   • Simulation Radius: 10000 (see physics everywhere)\n\n4. STUDIO:\n   • Auto-Save Interval: 5 min (saves your work!)\n   • Show Diagnostics Bar: ON (see FPS & memory)\n\nThese small changes make a big difference in\nproductivity and comfort during long sessions!"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "text",
                content: "Complete these exercises before moving on:"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Install Roblox Studio and create a new Baseplate project. Find the Explorer and Properties panels.",
                  "**Exercise 2:** Practice viewport navigation — zoom in/out, rotate, pan, and fly with WASD + right-click.",
                  "**Exercise 3:** In the Explorer, find the 'Workspace' folder and the 'SpawnLocation' inside it. Click on SpawnLocation and look at its properties.",
                  "**Exercise 4:** Open the Output panel (View → Output). Type `print(\"Hello!\")` in the Command Bar and press Enter. See it appear in Output!",
                  "**Exercise 5:** Press F5 to playtest. Walk around with WASD and jump with Space. Press Shift+F5 to stop."
                ]
              },
              {
                type: "checkpoint",
                content: "Install Roblox Studio, create a new Baseplate project, and find the Explorer, Properties, and Output windows. Can you locate the 'Workspace' folder and the SpawnLocation inside it? Try printing a message to the Output using the Command Bar!"
              }
            ]
          }
        },
        {
          id: "1-2",
          title: "Building Your First World",
          completed: false,
          content: {
            description: "Learn to build in Roblox! Create parts, change properties, and construct your first structures like a professional level designer.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll know how to create, transform, and customize parts to build any structure you can imagine.

Everything visible in a Roblox game is made of **Parts** — the fundamental building blocks of every 3D world. Parts come in five shapes: Block, Sphere, Cylinder, Wedge, and Corner Wedge. By combining, scaling, rotating, and coloring these shapes, you can build anything from a simple house to a massive castle.

Professional Roblox developers think of parts like LEGO bricks. Each individual piece is simple, but when combined thoughtfully, they create something incredible. Let's learn the tools that make this possible.`
              },
              {
                type: "heading",
                level: 2,
                content: "Creating Parts"
              },
              {
                type: "code",
                language: "text",
                filename: "creating_parts.txt",
                code: "Method 1: Menu (Recommended for Beginners)\n──────────────────────────────────────────\n1. Click the 'Model' tab at the top\n2. Click the 'Part' dropdown button\n3. Choose your shape:\n   • Block        → Rectangular box (most common!)\n   • Sphere       → Ball shape\n   • Cylinder     → Tube/pipe shape\n   • Wedge        → Triangular ramp\n   • Corner Wedge → Corner ramp piece\n\nMethod 2: Keyboard Shortcut (Faster)\n──────────────────────────────────────────\n• Just start using the Model tab and toolbar\n• Parts appear at the camera's focus point\n\nMethod 3: Explorer (Most Control)\n──────────────────────────────────────────\n1. Right-click 'Workspace' in Explorer\n2. Insert Object → Part\n3. The part appears at 0, 0, 0"
              },
              {
                type: "heading",
                level: 2,
                content: "The Transform Tools"
              },
              {
                type: "text",
                content: "Transform tools are how you move, resize, and rotate parts. Master these and you can build anything:"
              },
              {
                type: "code",
                language: "text",
                filename: "transform_tools.txt",
                code: "Tool        Shortcut    What It Does\n────────    ────────    ──────────────────────────────\nSelect      V           Click objects to select them\nMove        Ctrl+1      Drag colored arrows to move\n                        Red=X, Green=Y, Blue=Z\nScale       Ctrl+2      Drag handles to resize\n                        Drag corners to scale uniformly\nRotate      Ctrl+3      Drag colored circles to rotate\n                        15° increments by default\n\nUseful Modifiers:\n• Hold Shift while moving → Snap to grid\n• Change grid size: Model tab → Snap to Grid → change value\n• Ctrl+D → Duplicate selected object\n• Delete/Backspace → Delete selected object\n• Ctrl+Z → Undo (your best friend!)"
              },
              {
                type: "heading",
                level: 2,
                content: "Essential Properties"
              },
              {
                type: "text",
                content: "Every part has dozens of properties. Here are the ones you'll use most:"
              },
              {
                type: "code",
                language: "text",
                filename: "part_properties.txt",
                code: "APPEARANCE Properties:\n• Name             → Give it a descriptive name! ('Floor', 'Wall1')\n• Color / BrickColor → Click to pick from the color palette\n• Material         → Surface look: Plastic, Wood, Metal, Brick,\n                     Marble, Granite, Grass, Sand, Neon, Glass, etc.\n• Transparency     → 0 = fully solid, 1 = completely invisible\n                     0.5 = semi-transparent (great for glass!)\n• Reflectance      → 0 = matte, 1 = mirror-like reflection\n\nTRANSFORM Properties:\n• Position         → X, Y, Z coordinates in the world\n• Size             → Width (X), Height (Y), Depth (Z) in studs\n• Orientation      → Rotation on each axis in degrees\n\nBEHAVIOR Properties:\n• Anchored         → ✅ = stays in place, ❌ = affected by gravity!\n• CanCollide       → ✅ = solid (blocks movement), ❌ = walk through\n• CastShadow       → Whether the part creates shadows\n• Locked           → Prevent accidental selection in viewport"
              },
              {
                type: "warning",
                content: "Always ANCHOR parts that should stay in place! This is the #1 beginner mistake. If you forget, your carefully placed parts will fall, bounce, and scatter when you hit Play. Select the part → Properties → check 'Anchored'. Get in the habit of doing this for every static part you place."
              },
              {
                type: "heading",
                level: 2,
                content: "Materials Comparison"
              },
              {
                type: "text",
                content: "Choosing the right material dramatically changes how your game looks and feels:"
              },
              {
                type: "code",
                language: "text",
                filename: "materials_guide.txt",
                code: "Material        Best Used For             Visual Effect\n──────────      ─────────────────         ──────────────\nPlastic         Default, clean surfaces   Smooth, slight sheen\nSmooth Plastic  Modern, polished look     Very smooth, glossy\nWood            Floors, furniture         Grain texture\nWood Planks     Docks, rustic builds      Plank lines visible\nBrick           Walls, buildings          Brick pattern\nCobblestone     Paths, old walls          Rough stone texture\nGranite         Cliffs, monuments         Speckled stone\nMarble          Fancy floors, statues     Smooth veined stone\nMetal           Industrial, machines      Metallic sheen\nDiamondPlate    Sci-fi, industrial        Diamond grip pattern\nGrass           Ground, nature            Green grass texture\nSand            Beach, desert             Sandy texture\nNeon            Lights, glowing effects   Self-illuminating!\nGlass           Windows, transparent      See-through + reflective\nForceField      Shields, barriers         Animated energy look\nIce             Winter, frozen areas      Translucent blue"
              },
              {
                type: "heading",
                level: 2,
                content: "Build Project: A Simple House"
              },
              {
                type: "text",
                content: "Let's put everything together and build a complete house. Follow each step carefully:"
              },
              {
                type: "code",
                language: "text",
                filename: "house_project.txt",
                code: "STEP 1: THE FLOOR\n• Create a Block part\n• Size: 20, 1, 20 (wide, thin, deep)\n• Position: 0, 0.5, 0 (sitting on the ground)\n• Material: Wood Planks\n• Color: Brown\n• Anchor: ✅ YES\n• Name: 'Floor'\n\nSTEP 2: FOUR WALLS\n• Create a Block part\n• Size: 1, 12, 20 (thin, tall, same depth as floor)\n• Position: -9.5, 6.5, 0 (left wall)\n• Material: Brick\n• Color: Light tan / cream\n• Anchor: ✅ YES\n• Name: 'WallLeft'\n• Duplicate (Ctrl+D) and move to right side for 'WallRight'\n• Create two more for front and back walls\n• Size: 20, 12, 1 for front/back walls\n\nSTEP 3: THE ROOF\n• Create a Wedge part (for a slanted roof)\n• Size: 20, 6, 10 (wide, angled, half-depth)\n• Position above the walls\n• Material: Slate\n• Color: Dark gray\n• Anchor: ✅ YES\n• Duplicate and rotate for the other side\n\nSTEP 4: A DOORWAY\n• For the door opening, use Negate:\n  - Create a Block where the door should be\n  - Size: 4, 8, 1 (door-sized)\n  - Select both the wall and the door block\n  - Model → Negate → Union\n  This cuts a hole in the wall!\n\nSTEP 5: DETAILS\n• Add a window (Glass material, semi-transparent)\n• Add a chimney (Brick material cylinder)\n• Add a porch (WoodPlanks platform out front)"
              },
              {
                type: "tip",
                content: "Hold Shift while moving parts for grid snapping — this helps align walls perfectly. Change the grid size in the Model tab under 'Snap to Grid'. Use 1 stud for precision building, 4 studs for rough placement."
              },
              {
                type: "heading",
                level: 2,
                content: "Organizing Your Build"
              },
              {
                type: "text",
                content: "Professional developers organize their parts into folders and models:"
              },
              {
                type: "code",
                language: "text",
                filename: "organization.txt",
                code: "Good Organization (use this!):\nWorkspace\n├── House\n│   ├── Floor\n│   ├── Walls\n│   │   ├── WallLeft\n│   │   ├── WallRight\n│   │   ├── WallFront\n│   │   └── WallBack\n│   ├── Roof\n│   └── Details\n│       ├── Window1\n│       └── Chimney\n├── Landscape\n│   ├── Tree1\n│   └── Tree2\n└── SpawnLocation\n\nHow to create folders:\n1. Right-click Workspace → Insert Object → Folder\n2. Name it something descriptive\n3. Drag parts into the folder in Explorer\n\nHow to group into a Model:\n1. Select multiple parts (Ctrl+Click)\n2. Right-click → Group as Model (Ctrl+G)\n3. Name the Model in Properties"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create one of each part shape (Block, Sphere, Cylinder, Wedge, Corner Wedge) and change each to a different material and color.",
                  "**Exercise 2:** Build the house described above. Take your time aligning walls properly with grid snapping.",
                  "**Exercise 3:** Create a glass window by making a thin block with Glass material and Transparency 0.3.",
                  "**Exercise 4:** Organize all your house parts into a Model called 'House' using Ctrl+G.",
                  "**Exercise 5:** Build a second structure — a tower or a bridge — using at least 10 parts."
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Working with Unions — Combining Parts"
              },
              {
                type: "text",
                content: "Unions let you combine, subtract, and intersect parts to create complex shapes that would be impossible with individual parts:"
              },
              {
                type: "code",
                language: "text",
                filename: "unions_guide.txt",
                code: "UNION OPERATIONS (Model tab):\n\n1. UNION (Ctrl+Shift+G) — Combine parts into one shape\n   • Select 2+ parts → Model → Union\n   • Creates a single merged part\n   • Great for: complex buildings, curved shapes\n\n2. NEGATE — Subtract one shape from another\n   • Select the part to cut out\n   • Model → Negate (turns it red/transparent)\n   • Select the negated part AND the base part\n   • Model → Union\n   • The negated shape is cut out!\n   • Great for: doorways, windows, tunnels\n\n3. INTERSECT — Keep only where parts overlap\n   • Select 2+ overlapping parts\n   • Model → Intersect\n   • Only the overlapping area remains\n   • Great for: custom shapes, decorations\n\nEXAMPLE — Making a Window Hole:\n1. Place a wall (Block: 20 x 12 x 1)\n2. Place a smaller block where the window should be\n   (Block: 4 x 4 x 2, positioned inside the wall)\n3. Select the small block → Model → Negate\n4. Select BOTH parts → Model → Union\n5. Result: Wall with a rectangular hole!"
              },
              {
                type: "heading",
                level: 2,
                content: "Physics & Constraints"
              },
              {
                type: "text",
                content: "Roblox has a powerful physics engine. Understanding when to use physics vs anchoring is key:"
              },
              {
                type: "code",
                language: "text",
                filename: "physics_basics.txt",
                code: "WHEN TO ANCHOR vs UNANCHOR:\n\nANCHORED (✅ Anchored = true):\n• Walls, floors, roofs (static structures)\n• Decorations that shouldn't move\n• Platforms, checkpoints\n• Anything that stays in place\n\nUNANCHORED (❌ Anchored = false):\n• Balls, projectiles (things that fly/roll)\n• Destructible structures (knock them over!)\n• Physics puzzles (stacking, balancing)\n• Ragdoll effects\n\nUSEFUL PHYSICS PROPERTIES:\n• Density   → How heavy (affects momentum)\n• Friction  → How slippery (ice vs rubber)\n• Elasticity → How bouncy (0 = no bounce, 1 = super bouncy)\n\nSet these in Properties → CustomPhysicalProperties:\n  1. Check 'CustomPhysicalProperties'\n  2. Adjust Density, Friction, Elasticity\n\nCONSTRAINTS (connecting parts):\n• HingeConstraint   → Door hinges, rotating platforms\n• RopeConstraint    → Swinging ropes, chains\n• SpringConstraint  → Bouncy platforms, suspension\n• WeldConstraint    → Glue parts together permanently"
              },
              {
                type: "heading",
                level: 2,
                content: "Terrain — Natural Landscapes"
              },
              {
                type: "code",
                language: "text",
                filename: "terrain_basics.txt",
                code: "TERRAIN EDITOR (Home → Editor → Terrain Editor):\n\nTerrain lets you create natural landscapes:\n• Mountains, valleys, cliffs\n• Water (oceans, lakes, rivers)\n• Grass, sand, mud, snow surfaces\n\nTerrain Tools:\n━━━━━━━━━━━━\n• Generate → Auto-create a landscape from settings\n  - Size, Biome (Desert, Arctic, Grassland)\n  - Seed number for reproducible worlds\n\n• Sculpt → Shape terrain like clay\n  - Add     → Build up terrain\n  - Subtract → Dig/carve terrain\n  - Grow    → Raise terrain gently\n  - Erode   → Smooth/wear down terrain\n  - Smooth  → Remove rough edges\n  - Flatten → Make a flat area\n\n• Paint → Change terrain material\n  - Grass, Sand, Rock, Snow, Ice\n  - Mud, Ground, Slate, Limestone\n  - Water (creates actual water!)\n\n• Region → Select and modify large areas\n  - Copy/paste terrain sections\n  - Fill/delete terrain regions\n\nTIP: Start with Generate for a base, then use\nSculpt to refine, and Paint to add variety!"
              },
              {
                type: "quiz",
                question: "What happens if you forget to anchor a part?",
                options: [
                  { id: "a", text: "Nothing, it stays in place" },
                  { id: "b", text: "It falls due to gravity when the game runs" },
                  { id: "c", text: "It disappears" },
                  { id: "d", text: "The game crashes" }
                ],
                correct: "b",
                explanation: "Unanchored parts are affected by Roblox's physics engine! They'll fall, roll, bounce, or get pushed around. Always anchor static parts like floors, walls, and decorations. Only leave parts unanchored if you WANT them to move (like a ball or a falling object)."
              }
            ]
          }
        },
        {
          id: "1-3",
          title: "Your First Lua Script",
          completed: false,
          content: {
            description: "Write your first lines of code! Make parts change color, print messages, and respond to your commands using the Lua programming language.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll understand what scripts are, how to create them, and you'll write working code that controls parts in your game world.

Building in Roblox Studio is powerful, but **scripts** are what bring your game to life. Scripts are written in **Lua** — a lightweight, fast programming language used by professional game developers around the world. Lua powers not just Roblox, but also World of Warcraft add-ons, Adobe Photoshop Lightroom, and many embedded systems.

Don't worry if you've never coded before. Programming is just giving instructions to a computer — one step at a time. If you can write a recipe or give directions to a friend, you can learn to code.`
              },
              {
                type: "heading",
                level: 2,
                content: "What Are Scripts?"
              },
              {
                type: "text",
                content: "A **script** is a text file containing instructions that the computer follows. In Roblox, there are three types of scripts:"
              },
              {
                type: "code",
                language: "text",
                filename: "script_types.txt",
                code: "Script Types in Roblox:\n\n1. Script (Server Script)\n   • Runs on the server (Roblox's computers)\n   • Handles game logic, data saving, security\n   • Other players can't see or hack this code\n   • Icon: Blue page\n\n2. LocalScript\n   • Runs on the player's device (client)\n   • Handles GUI, camera, input, local effects\n   • Each player runs their own copy\n   • Icon: Blue page with a person\n\n3. ModuleScript\n   • Shared code library\n   • Can be required by both Scripts and LocalScripts\n   • Great for organizing reusable functions\n   • Icon: Brown page\n\nFOR NOW: We'll use regular Scripts (server-side).\nWe'll learn LocalScripts when we build GUIs!"
              },
              {
                type: "heading",
                level: 2,
                content: "Creating Your First Script"
              },
              {
                type: "code",
                language: "text",
                filename: "add_script_steps.txt",
                code: "How to add a Script to a Part:\n\n1. In Explorer, click on a Part (select it)\n2. Click the ✚ button next to the Part's name\n3. Type 'Script' in the search box\n4. Click 'Script' to add it\n5. The Script appears INSIDE the Part in Explorer:\n   Workspace\n   └── Part\n       └── Script    ← your new script!\n6. Double-click the Script to open the code editor\n\nAlternative method:\n• Right-click the Part → Insert Object → Script"
              },
              {
                type: "heading",
                level: 2,
                content: "Hello, Roblox World!"
              },
              {
                type: "text",
                content: "Every programmer starts here. Let's write the classic 'Hello World' program:"
              },
              {
                type: "code",
                language: "lua",
                filename: "hello_world.lua",
                code: "-- This is a comment! Comments start with two dashes --\n-- The computer ignores comments — they're notes for YOU\n\n-- print() sends a message to the Output window\nprint(\"Hello, Roblox World!\")\nprint(\"I just wrote my first script!\")\nprint(\"This is going to be awesome!\")\n\n-- Comments are great for explaining your code\n-- Use them to describe WHAT your code does and WHY\n\n-- TIP: Open View → Output to see your messages!\n-- Then press F5 to run the game and watch the Output"
              },
              {
                type: "tip",
                content: "Always have the Output window open (View → Output). It shows your print() messages AND error messages. When something breaks, the Output tells you exactly what went wrong and which line caused it. It's your #1 debugging tool!"
              },
              {
                type: "heading",
                level: 2,
                content: "Controlling Parts with Code"
              },
              {
                type: "text",
                content: "Now let's do something visual! Scripts can change any property of the part they're inside:"
              },
              {
                type: "code",
                language: "lua",
                filename: "control_part.lua",
                code: "-- script.Parent refers to the object that CONTAINS this script\n-- Since we put this script inside a Part, script.Parent IS the Part\nlocal part = script.Parent\n\n-- Wait 2 seconds (so you can see the change happen)\nwait(2)\n\n-- Change the color!\npart.BrickColor = BrickColor.new(\"Bright red\")\nprint(\"The part turned red!\")\n\n-- Wait 2 more seconds\nwait(2)\n\n-- Change the material to Neon (glowing!)\npart.Material = Enum.Material.Neon\nprint(\"The part is now glowing!\")\n\n-- Wait 2 more seconds\nwait(2)\n\n-- Make it bigger!\npart.Size = Vector3.new(10, 10, 10)\nprint(\"The part grew!\")\n\n-- Wait 2 more seconds\nwait(2)\n\n-- Make it semi-transparent\npart.Transparency = 0.5\nprint(\"The part is now see-through!\")"
              },
              {
                type: "heading",
                level: 2,
                content: "Understanding the Code"
              },
              {
                type: "code",
                language: "lua",
                filename: "code_breakdown.lua",
                code: "-- Let's break down each concept:\n\n-- 1. COMMENTS (lines starting with --)\n-- These are notes for you. The computer skips them.\n-- Use them to explain what your code does!\n\n-- 2. VARIABLES (storing data with 'local')\nlocal part = script.Parent\n-- 'local' creates a new variable\n-- 'part' is the name we chose (could be anything)\n-- 'script.Parent' is the object containing this script\n-- So 'part' now refers to our Part!\n\n-- 3. WAIT (pausing the script)\nwait(2)   -- Pause for 2 seconds\nwait(0.5) -- Pause for half a second\n\n-- 4. CHANGING PROPERTIES (using the dot operator)\npart.BrickColor = BrickColor.new(\"Really red\")\n-- 'part' = which object\n-- '.BrickColor' = which property\n-- '=' = set it to\n-- 'BrickColor.new(\"Really red\")' = the new value\n\n-- 5. PRINT (output messages)\nprint(\"Any text in quotes shows in Output\")\nprint(42)  -- Numbers don't need quotes\nprint(part.Name)  -- Print a property's value"
              },
              {
                type: "heading",
                level: 2,
                content: "Color Cycle Animation"
              },
              {
                type: "text",
                content: "Let's create a part that continuously cycles through colors using a loop:"
              },
              {
                type: "code",
                language: "lua",
                filename: "color_cycle.lua",
                code: "local part = script.Parent\n\n-- A list of colors to cycle through\nlocal colors = {\n    \"Bright red\",\n    \"Bright orange\",\n    \"Bright yellow\",\n    \"Bright green\",\n    \"Bright blue\",\n    \"Bright violet\"\n}\n\n-- while true do = repeat forever\nwhile true do\n    -- Loop through each color in our list\n    for i, colorName in ipairs(colors) do\n        part.BrickColor = BrickColor.new(colorName)\n        wait(0.5)  -- Half-second per color\n    end\n    -- After all colors, the 'while true' loops back!\nend\n\n-- NOTE: Code after 'while true do' never runs\n-- because the loop never ends!"
              },
              {
                type: "warning",
                content: "Always include wait() inside a 'while true do' loop! Without it, the loop runs millions of times per second and FREEZES your game. Even wait() alone (no number) works — it pauses for one frame."
              },
              {
                type: "heading",
                level: 2,
                content: "Multiple Scripts Working Together"
              },
              {
                type: "text",
                content: "As your game grows, you'll have multiple scripts that need to work together. Understanding script execution order is key:"
              },
              {
                type: "code",
                language: "lua",
                filename: "multiple_scripts.lua",
                code: "-- IMPORTANT: Each script runs INDEPENDENTLY!\n-- Scripts don't share variables with each other.\n\n-- Script A (inside Part1):\nlocal myVar = 10\nprint(\"Script A: \" .. myVar)  -- 10\n\n-- Script B (inside Part2):\n-- print(myVar)  -- ERROR! myVar doesn't exist here!\n-- Script B has NO access to Script A's variables\n\n-- To share data between scripts, use:\n-- 1. Value Objects (IntValue, StringValue, BoolValue)\nlocal scoreValue = Instance.new(\"IntValue\")\nscoreValue.Name = \"SharedScore\"\nscoreValue.Value = 0\nscoreValue.Parent = game.ReplicatedStorage\n\n-- Any script can now read/write:\nlocal score = game.ReplicatedStorage.SharedScore\nscore.Value = 100  -- Script A sets it\nprint(score.Value) -- Script B reads it: 100\n\n-- 2. Attributes (simpler)\ngame.ReplicatedStorage:SetAttribute(\"GameState\", \"Lobby\")\n-- Any script reads:\nlocal state = game.ReplicatedStorage:GetAttribute(\"GameState\")\n\n-- SCRIPT EXECUTION ORDER:\n-- All scripts start running at roughly the same time\n-- There's no guaranteed order!\n-- Use WaitForChild() to wait for objects other scripts create"
              },
              {
                type: "heading",
                level: 2,
                content: "The wait() Function In-Depth"
              },
              {
                type: "code",
                language: "lua",
                filename: "wait_explained.lua",
                code: "-- wait() pauses the script for a specified number of seconds\n\nwait(3)     -- Pause for 3 seconds\nwait(0.5)   -- Pause for half a second\nwait()      -- Pause for one frame (~1/60th of a second)\n\n-- wait() returns the actual time elapsed\nlocal elapsed = wait(2)\nprint(elapsed)  -- Might be 2.016 (slightly more than 2)\n\n-- IMPORTANT: wait() is not perfectly precise!\n-- wait(0.1) might actually wait 0.116 seconds\n-- For precise timing, use RunService events:\n\nlocal RunService = game:GetService(\"RunService\")\nlocal startTime = tick()\n\nRunService.Heartbeat:Connect(function(deltaTime)\n    -- deltaTime = exact time since last frame\n    -- Runs every frame (usually 60 times/second)\n    local elapsed = tick() - startTime\n    -- Use this for precise game timers\nend)\n\n-- task.wait() is the modern replacement (Luau)\ntask.wait(2)  -- Same as wait(2) but more accurate\n\n-- task.spawn() runs a function in a new 'thread'\ntask.spawn(function()\n    wait(5)\n    print(\"This runs after 5 seconds\")\nend)\nprint(\"This runs immediately — didn't wait!\")"
              },
              {
                type: "heading",
                level: 2,
                content: "Common Color Names"
              },
              {
                type: "code",
                language: "lua",
                filename: "color_reference.lua",
                code: "-- Roblox BrickColor names you can use:\n\n-- Reds\nBrickColor.new(\"Bright red\")\nBrickColor.new(\"Really red\")\nBrickColor.new(\"Crimson\")\n\n-- Blues\nBrickColor.new(\"Bright blue\")\nBrickColor.new(\"Really blue\")\nBrickColor.new(\"Navy blue\")\n\n-- Greens\nBrickColor.new(\"Bright green\")\nBrickColor.new(\"Dark green\")\nBrickColor.new(\"Lime green\")\n\n-- Others\nBrickColor.new(\"White\")\nBrickColor.new(\"Black\")\nBrickColor.new(\"Bright yellow\")\nBrickColor.new(\"Bright orange\")\nBrickColor.new(\"Bright violet\")\nBrickColor.new(\"Hot pink\")\n\n-- For more precise colors, use Color3:\npart.Color = Color3.fromRGB(255, 100, 50)  -- Custom RGB!\n-- RGB = Red, Green, Blue (each 0-255)"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create a part with a script that prints your name to the Output window.",
                  "**Exercise 2:** Write a script that changes a part's color to your favorite color after 3 seconds.",
                  "**Exercise 3:** Make a part that grows slowly — increase its Size every second using a loop.",
                  "**Exercise 4:** Create a 'disco floor' — a part that rapidly changes to random colors using BrickColor.Random().",
                  "**Exercise 5:** Write a script that changes a part's Material through 5 different materials, one per second."
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Understanding CFrame — Position + Rotation"
              },
              {
                type: "text",
                content: "CFrame (Coordinate Frame) is one of the most powerful concepts in Roblox scripting. It represents both position AND rotation in a single value:"
              },
              {
                type: "code",
                language: "lua",
                filename: "cframe_basics.lua",
                code: "local part = script.Parent\n\n-- CFrame includes position AND rotation\n-- Move a part to a specific position\npart.CFrame = CFrame.new(10, 5, 20)  -- X=10, Y=5, Z=20\n\n-- Rotate a part (using CFrame.Angles)\n-- Angles use RADIANS, not degrees!\n-- math.rad() converts degrees to radians\npart.CFrame = CFrame.new(0, 5, 0) * CFrame.Angles(\n    math.rad(0),    -- X rotation (pitch)\n    math.rad(45),   -- Y rotation (yaw) — 45 degrees\n    math.rad(0)     -- Z rotation (roll)\n)\n\n-- Move a part RELATIVE to its current position\npart.CFrame = part.CFrame * CFrame.new(0, 0, -5)\n-- Moves 5 studs FORWARD (relative to where it's facing)\n\n-- Smoothly rotate a part\nlocal part = script.Parent\nwhile true do\n    part.CFrame = part.CFrame * CFrame.Angles(0, math.rad(2), 0)\n    wait()  -- One frame\nend\n-- This spins the part 2 degrees per frame!"
              },
              {
                type: "heading",
                level: 2,
                content: "Practical Project: Spinning Platform"
              },
              {
                type: "code",
                language: "lua",
                filename: "spinning_platform.lua",
                code: "-- Create a spinning platform players can ride\nlocal platform = script.Parent\nlocal SPIN_SPEED = 1  -- degrees per frame\nlocal BOB_SPEED = 0.02 -- bobbing speed\nlocal BOB_HEIGHT = 2  -- how high it bobs\nlocal startY = platform.Position.Y\nlocal time = 0\n\nwhile true do\n    time += BOB_SPEED\n    \n    -- Spin the platform\n    platform.CFrame = platform.CFrame * CFrame.Angles(0, math.rad(SPIN_SPEED), 0)\n    \n    -- Bob up and down using sine wave\n    local newY = startY + math.sin(time) * BOB_HEIGHT\n    platform.CFrame = CFrame.new(\n        platform.Position.X,\n        newY,\n        platform.Position.Z\n    ) * platform.CFrame.Rotation  -- Keep the rotation!\n    \n    wait()\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Error Messages — Reading & Fixing Them"
              },
              {
                type: "text",
                content: "When your code has a bug, the Output shows an error message. Learning to read these is essential:"
              },
              {
                type: "code",
                language: "text",
                filename: "common_errors.txt",
                code: "COMMON ERROR MESSAGES & HOW TO FIX THEM:\n\n1. \"attempt to index nil with 'Name'\"\n   Meaning: You tried to access .Name on something that's nil\n   Fix: Use FindFirstChild and check for nil before accessing\n   \n2. \"Expected ')' (to close '(' at line 5)\"\n   Meaning: You forgot a closing parenthesis\n   Fix: Count your opening and closing brackets\n   \n3. \"Expected 'end' (to close 'function' at line 3)\"\n   Meaning: You forgot an 'end' to close a function or if block\n   Fix: Every 'function', 'if', 'for', 'while' needs an 'end'\n\n4. \"attempt to perform arithmetic on a string value\"\n   Meaning: You tried to do math on text\n   Fix: Use tonumber() to convert: tonumber(\"42\") → 42\n\n5. \"ServerScriptService.Script:12: attempt to call a nil value\"\n   Meaning: Line 12 calls a function that doesn't exist\n   Fix: Check spelling, make sure function is defined BEFORE the call\n\nDEBUGGING TIPS:\n• Error messages always include the LINE NUMBER — check that line!\n• Use print() before and after suspicious code to narrow down bugs\n• Comment out sections of code to isolate the problem\n• The Output shows errors in RED — always check it!"
              },
              {
                type: "tip",
                content: "When you get an error, don't panic! Read the error message carefully — it tells you EXACTLY what went wrong and on which line. Add print() statements above and below the error line to see what values your variables actually have. 90% of bugs are found this way."
              },
              {
                type: "checkpoint",
                content: "Create a part with a script that changes its color every second, cycling through at least 4 colors. Can you make it change material too? Bonus: Can you make it spin using CFrame?"
              }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "Lua Programming Fundamentals",
      lessons: [
        {
          id: "2-1",
          title: "Variables & Data Types",
          completed: false,
          content: {
            description: "Master the foundation of all programming — storing and manipulating data with variables, understanding data types, and using operators.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll understand how to create variables, know all Lua data types, and perform operations on data like a real programmer.

**Variables** are the backbone of every program. They're containers that hold information your script needs — player names, health points, scores, positions, and much more. Think of them as labeled boxes: you choose the label (the name), and you choose what to put inside (the value).

Every game you've ever played uses thousands of variables behind the scenes. When you pick up a coin in Mario, a variable tracking your coin count increases by 1. When you take damage in Fortnite, a health variable decreases. Understanding variables is understanding how games work at their core.`
              },
              {
                type: "heading",
                level: 2,
                content: "Creating Variables"
              },
              {
                type: "code",
                language: "lua",
                filename: "variables_basics.lua",
                code: "-- Creating variables with 'local'\n-- Format: local name = value\n\nlocal playerName = \"DragonSlayer\"    -- Text (string)\nlocal health = 100                   -- Whole number (integer)\nlocal speed = 16.5                   -- Decimal number (float)\nlocal isAlive = true                 -- True/false (boolean)\nlocal weapon = nil                   -- Empty/nothing (nil)\n\n-- Print them to check their values\nprint(playerName)   -- Output: DragonSlayer\nprint(health)       -- Output: 100\nprint(speed)        -- Output: 16.5\nprint(isAlive)      -- Output: true\nprint(weapon)       -- Output: nil\n\n-- You can change a variable's value anytime\nhealth = 75        -- Now health is 75 (no 'local' needed to update!)\nweapon = \"Sword\"   -- Now weapon has a value\n\nprint(health)      -- Output: 75\nprint(weapon)      -- Output: Sword"
              },
              {
                type: "heading",
                level: 2,
                content: "Data Types in Lua"
              },
              {
                type: "text",
                content: "Lua has several data types. Each stores a different kind of information:"
              },
              {
                type: "code",
                language: "lua",
                filename: "data_types.lua",
                code: "-- STRING: Text wrapped in quotes\nlocal name = \"Roblox\"           -- Double quotes\nlocal message = 'Hello!'        -- Single quotes work too\nlocal multiline = [[             -- Double brackets for\nThis text spans                    multi-line strings\nmultiple lines!]]\n\n-- NUMBER: Integers and decimals\nlocal coins = 50                -- Whole number\nlocal speed = 16.5              -- Decimal\nlocal negative = -10            -- Negative numbers\nlocal big = 1e6                 -- Scientific notation (1,000,000)\n\n-- BOOLEAN: True or false (only two values!)\nlocal isJumping = false\nlocal hasKey = true\n\n-- NIL: Represents nothing/empty\nlocal emptyValue = nil\n-- Any variable that hasn't been set is nil by default\n\n-- TABLE: Collections of data (learn these later!)\nlocal inventory = {\"Sword\", \"Shield\", \"Potion\"}\nlocal stats = {health = 100, mana = 50}\n\n-- Check what type something is:\nprint(type(name))     -- Output: string\nprint(type(coins))    -- Output: number\nprint(type(isJumping)) -- Output: boolean\nprint(type(emptyValue)) -- Output: nil\nprint(type(inventory)) -- Output: table"
              },
              {
                type: "tip",
                content: "Always use 'local' when creating variables! Variables without 'local' become global — they're accessible everywhere, which causes bugs and is slower. Think of 'local' as keeping your variables organized in their own room rather than throwing them everywhere."
              },
              {
                type: "heading",
                level: 2,
                content: "Math Operations"
              },
              {
                type: "code",
                language: "lua",
                filename: "math_operations.lua",
                code: "-- Basic arithmetic\nlocal a = 10\nlocal b = 3\n\nprint(a + b)   -- Addition: 13\nprint(a - b)   -- Subtraction: 7\nprint(a * b)   -- Multiplication: 30\nprint(a / b)   -- Division: 3.3333...\nprint(a % b)   -- Modulo (remainder): 1\nprint(a ^ b)   -- Power (10³): 1000\n\n-- Updating variables with math\nlocal score = 0\nscore = score + 10     -- Add 10 → score is now 10\nscore = score + 5      -- Add 5 more → score is now 15\nscore = score * 2      -- Double it → score is now 30\nprint(score)           -- Output: 30\n\n-- Shorthand operators (Luau, Roblox's version of Lua)\nscore += 10    -- Same as: score = score + 10\nscore -= 5     -- Same as: score = score - 5\nscore *= 2     -- Same as: score = score * 2\nscore /= 4     -- Same as: score = score / 4\n\n-- Useful math functions\nprint(math.abs(-15))     -- Absolute value: 15\nprint(math.floor(3.7))   -- Round down: 3\nprint(math.ceil(3.2))    -- Round up: 4\nprint(math.random(1,10)) -- Random number 1-10\nprint(math.max(5, 10, 3)) -- Biggest: 10\nprint(math.min(5, 10, 3)) -- Smallest: 3\nprint(math.sqrt(16))     -- Square root: 4\nprint(math.pi)           -- Pi: 3.14159..."
              },
              {
                type: "heading",
                level: 2,
                content: "Working with Strings"
              },
              {
                type: "code",
                language: "lua",
                filename: "string_operations.lua",
                code: "-- Joining strings (concatenation) with ..\nlocal firstName = \"Dragon\"\nlocal lastName = \"Slayer\"\nlocal fullName = firstName .. lastName\nprint(fullName)  -- Output: DragonSlayer\n\n-- Add spaces yourself!\nlocal niceName = firstName .. \" \" .. lastName\nprint(niceName)  -- Output: Dragon Slayer\n\n-- Mix strings and numbers\nlocal score = 100\nlocal message = \"Your score is: \" .. score\nprint(message)   -- Output: Your score is: 100\n\n-- String functions\nlocal text = \"Hello Roblox!\"\nprint(string.len(text))        -- Length: 13\nprint(string.upper(text))      -- HELLO ROBLOX!\nprint(string.lower(text))      -- hello roblox!\nprint(string.sub(text, 1, 5))  -- First 5 chars: Hello\nprint(string.reverse(text))    -- !xolboR olleH\n\n-- String formatting (like f-strings)\nlocal name = \"Steve\"\nlocal hp = 85\nlocal formatted = string.format(\"%s has %d HP\", name, hp)\nprint(formatted)  -- Output: Steve has 85 HP\n-- %s = string placeholder, %d = integer, %f = float"
              },
              {
                type: "heading",
                level: 2,
                content: "Naming Conventions"
              },
              {
                type: "code",
                language: "text",
                filename: "naming_rules.txt",
                code: "Variable Naming Rules:\n✅ Must start with a letter or underscore\n✅ Can contain letters, numbers, underscores\n❌ Cannot contain spaces or special characters\n❌ Cannot be a Lua keyword (if, then, end, etc.)\n\nNaming Conventions (Best Practices):\n✅ camelCase for variables:   local playerHealth = 100\n✅ camelCase for functions:   local function calculateDamage()\n✅ PascalCase for services:   local Players = game:GetService(\"Players\")\n✅ UPPER_CASE for constants:  local MAX_HEALTH = 100\n\nExamples of GOOD names:\n  local playerName = \"Steve\"         -- descriptive!\n  local maxHealth = 100              -- clear meaning\n  local isGameOver = false           -- boolean reads like a question\n  local coinCount = 0                -- specific and clear\n\nExamples of BAD names:\n  local x = \"Steve\"                 -- what is x??\n  local temp = 100                   -- temp what??\n  local flag = false                 -- what flag??\n  local n = 0                        -- meaningless"
              },
              {
                type: "warning",
                content: "Variable names are case-sensitive! 'playerName', 'PlayerName', and 'PLAYERNAME' are three completely different variables. Be consistent with your naming to avoid confusing bugs."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create variables for a game character: name (string), health (number), mana (number), isAlive (boolean). Print them all.",
                  "**Exercise 2:** Write a damage calculator: create baseDamage and multiplier variables, calculate totalDamage, and print the result.",
                  "**Exercise 3:** Create a formatted message: 'Player [name] has [health] HP and [coins] coins' using concatenation (..) operator.",
                  "**Exercise 4:** Use math.random() to generate a random number between 1 and 100. Print whether it's above or below 50.",
                  "**Exercise 5:** Create a script that modifies a part's Size, Position, and Color using variables and math operations."
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Roblox-Specific Data Types"
              },
              {
                type: "text",
                content: "Besides basic Lua types, Roblox adds special types for 3D game development. You'll use these constantly:"
              },
              {
                type: "code",
                language: "lua",
                filename: "roblox_types.lua",
                code: "-- VECTOR3: A 3D point (X, Y, Z) — positions, sizes, velocities\nlocal position = Vector3.new(10, 5, 20)\nprint(position.X)  -- 10\nprint(position.Y)  -- 5\nprint(position.Z)  -- 20\n\n-- Vector3 math:\nlocal a = Vector3.new(1, 2, 3)\nlocal b = Vector3.new(4, 5, 6)\nprint(a + b)       -- (5, 7, 9)\nprint(a * 2)       -- (2, 4, 6)\nprint(a.Magnitude) -- Distance from origin (3.74...)\n\n-- COLOR3: Represents a color (RGB values 0-1)\nlocal red = Color3.new(1, 0, 0)          -- Red (0-1 scale)\nlocal blue = Color3.fromRGB(0, 0, 255)   -- Blue (0-255 scale)\nlocal purple = Color3.fromHSV(0.8, 1, 1) -- HSV color space\n\n-- CFRAME: Position + Rotation combined\nlocal cf = CFrame.new(10, 5, 20)  -- Position only\nlocal rotated = CFrame.Angles(0, math.rad(45), 0)  -- Rotation only\nlocal combined = CFrame.new(10, 5, 20) * CFrame.Angles(0, math.rad(45), 0)\n\n-- UDIM2: UI positioning (Scale, Offset for X and Y)\nlocal pos = UDim2.new(0.5, 0, 0.5, 0)  -- Center of screen\nlocal size = UDim2.new(0, 200, 0, 50)  -- 200px wide, 50px tall\n\n-- ENUM: Named constants for Roblox properties\nlocal material = Enum.Material.Neon\nlocal font = Enum.Font.GothamBold\nlocal keyCode = Enum.KeyCode.E"
              },
              {
                type: "heading",
                level: 2,
                content: "Type Conversion — Converting Between Types"
              },
              {
                type: "code",
                language: "lua",
                filename: "type_conversion.lua",
                code: "-- Converting between types is common and important\n\n-- STRING → NUMBER\nlocal numStr = \"42\"\nlocal num = tonumber(numStr)\nprint(num + 8)  -- 50\n\n-- NUMBER → STRING\nlocal score = 100\nlocal scoreStr = tostring(score)\nprint(\"Score: \" .. scoreStr)  -- Score: 100\n\n-- Automatic conversion happens with ..\nprint(\"HP: \" .. 100)  -- Works! Number auto-converts to string\n\n-- But NOT with math operators!\n-- print(\"5\" + 3)  -- This actually WORKS in Lua! Returns 8\n-- Lua auto-converts strings to numbers for math\n-- But it's better to be explicit with tonumber()\n\n-- BOOLEAN → STRING\nlocal alive = true\nprint(tostring(alive))  -- \"true\"\n\n-- Checking types before conversion\nlocal input = \"hello\"\nlocal result = tonumber(input)\nif result then\n    print(\"Valid number: \" .. result)\nelse\n    print(\"Not a number!\")  -- This prints\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Constants & Configuration Patterns"
              },
              {
                type: "code",
                language: "lua",
                filename: "constants_pattern.lua",
                code: "-- Use UPPER_CASE for values that shouldn't change\n-- Put them at the TOP of your script for easy editing\n\n-- Game configuration constants\nlocal MAX_HEALTH = 100\nlocal DEFAULT_WALK_SPEED = 16\nlocal JUMP_POWER = 50\nlocal RESPAWN_TIME = 5\nlocal COIN_VALUE = 10\nlocal MAX_INVENTORY_SLOTS = 20\n\n-- Enemy configuration\nlocal ENEMY_CONFIG = {\n    ZOMBIE = {\n        health = 50,\n        speed = 10,\n        damage = 15,\n        color = BrickColor.new(\"Camo\")\n    },\n    SKELETON = {\n        health = 30,\n        speed = 14,\n        damage = 10,\n        color = BrickColor.new(\"Institutional white\")\n    },\n    BOSS = {\n        health = 500,\n        speed = 8,\n        damage = 50,\n        color = BrickColor.new(\"Really red\")\n    },\n}\n\n-- Usage: change one value at the top to affect the entire game\nprint(\"Boss has \" .. ENEMY_CONFIG.BOSS.health .. \" HP\")\n-- Changing MAX_HEALTH from 100 to 150 updates everywhere\n-- MUCH better than finding every '100' in your code!"
              },
              {
                type: "tip",
                content: "Always put game configuration at the top of your scripts! This way, when you want to balance your game (adjust damage, health, speed, etc.), you only need to change one number instead of hunting through hundreds of lines of code. Pro developers call this 'data-driven design'."
              },
              {
                type: "quiz",
                question: "What does this print: local x = 5; x = x + 3; x *= 2; print(x)",
                options: [
                  { id: "a", text: "5" },
                  { id: "b", text: "8" },
                  { id: "c", text: "16" },
                  { id: "d", text: "Error" }
                ],
                correct: "c",
                explanation: "x starts at 5, then x + 3 = 8, then x * 2 = 16. The *= operator multiplies and assigns!"
              }
            ]
          }
        },
        {
          id: "2-2",
          title: "If Statements & Logic",
          completed: false,
          content: {
            description: "Teach your game to make decisions! Master if/elseif/else statements, comparison operators, and logical operators to create smart game logic.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll write code that makes decisions based on game state — checking health, comparing scores, and combining multiple conditions.

**If statements** are how your code makes decisions. Without them, your code would do the same thing every single time — boring! With if statements, your game can react differently depending on what's happening. Is the player low on health? Show a warning. Did they collect enough coins? Open the door. Is the enemy close? Start attacking.

Every game mechanic you've ever experienced relies on if statements. The 'Game Over' screen? An if statement checking if health <= 0. Power-ups? If statements checking what the player touched. Unlocking levels? If statements checking your score.`
              },
              {
                type: "heading",
                level: 2,
                content: "Basic If Statement"
              },
              {
                type: "code",
                language: "lua",
                filename: "if_basic.lua",
                code: "-- The simplest if statement\nlocal health = 25\n\nif health < 50 then\n    print(\"⚠️ Low health warning!\")\nend\n\n-- Anatomy of an if statement:\n-- 'if'       → starts the condition check\n-- 'health < 50' → the condition (is this true?)\n-- 'then'     → if the condition IS true, run the code below\n-- [code]     → runs only when condition is true\n-- 'end'      → marks the end of the if block\n\n-- If health were 75, NOTHING would print\n-- because 75 < 50 is false!"
              },
              {
                type: "heading",
                level: 2,
                content: "If-Else: Two Paths"
              },
              {
                type: "code",
                language: "lua",
                filename: "if_else.lua",
                code: "local coins = 30\nlocal itemCost = 50\n\nif coins >= itemCost then\n    print(\"✅ Purchase successful!\")\n    coins = coins - itemCost\nelse\n    print(\"❌ Not enough coins!\")\n    print(\"You need \" .. (itemCost - coins) .. \" more coins.\")\nend\n\n-- 'else' catches everything that DOESN'T match the 'if'\n-- One of these two blocks ALWAYS runs — never both, never neither"
              },
              {
                type: "heading",
                level: 2,
                content: "If-Elseif-Else: Multiple Paths"
              },
              {
                type: "code",
                language: "lua",
                filename: "if_elseif.lua",
                code: "local score = 82\n\nif score >= 90 then\n    print(\"🏆 Grade: A — Excellent!\")\nelseif score >= 80 then\n    print(\"⭐ Grade: B — Great job!\")\nelseif score >= 70 then\n    print(\"👍 Grade: C — Not bad!\")\nelseif score >= 60 then\n    print(\"📝 Grade: D — Needs improvement\")\nelse\n    print(\"❌ Grade: F — Try again\")\nend\n\n-- Lua checks conditions from TOP to BOTTOM\n-- It runs the FIRST true block, then skips the rest\n-- Since 82 >= 90 is false, it moves to 82 >= 80 (true!)\n-- Prints Grade B, then skips everything below"
              },
              {
                type: "heading",
                level: 2,
                content: "Comparison Operators"
              },
              {
                type: "code",
                language: "lua",
                filename: "comparison_operators.lua",
                code: "-- All comparison operators:\nlocal a = 10\nlocal b = 5\n\nprint(a == b)   -- Equal to: false (10 equals 5? no!)\nprint(a ~= b)   -- Not equal to: true (10 not equal to 5? yes!)\nprint(a > b)    -- Greater than: true\nprint(a < b)    -- Less than: false\nprint(a >= b)   -- Greater than or equal: true\nprint(a <= b)   -- Less than or equal: false\n\n-- Game examples:\nlocal health = 100\nlocal maxHealth = 100\nlocal coins = 45\n\nif health == maxHealth then\n    print(\"Full health!\")\nend\n\nif health ~= 0 then\n    print(\"Still alive!\")\nend\n\nif coins >= 50 then\n    print(\"Can buy item!\")\nend"
              },
              {
                type: "warning",
                content: "In Lua, 'not equal' is ~= (tilde-equals), NOT != like in most other languages! This is one of the most common mistakes. Also remember: == is comparison (checking equality), while = is assignment (setting a value). Using = in an if statement is a bug!"
              },
              {
                type: "heading",
                level: 2,
                content: "Logical Operators: and, or, not"
              },
              {
                type: "code",
                language: "lua",
                filename: "logical_operators.lua",
                code: "local health = 80\nlocal hasShield = true\nlocal isBanned = false\nlocal level = 15\n\n-- AND: BOTH conditions must be true\nif health > 50 and hasShield then\n    print(\"Ready for battle!\")\nend\n-- true AND true = true ✅\n\n-- OR: at least ONE condition must be true\nif health < 20 or not hasShield then\n    print(\"Danger! Find cover!\")\nend\n-- false OR false = false (so this doesn't print)\n\n-- NOT: flips true to false, false to true\nif not isBanned then\n    print(\"Welcome to the game!\")\nend\n-- not false = true ✅\n\n-- Combining multiple operators\nif level >= 10 and (hasShield or health > 75) then\n    print(\"You can enter the dungeon!\")\nend\n-- true AND (true OR true) = true ✅\n\n-- Truth table for reference:\n-- true  AND true  = true\n-- true  AND false = false\n-- false AND true  = false\n-- false AND false = false\n\n-- true  OR true  = true\n-- true  OR false = true\n-- false OR true  = true\n-- false OR false = false"
              },
              {
                type: "heading",
                level: 2,
                content: "Nested If Statements"
              },
              {
                type: "text",
                content: "You can put if statements inside other if statements for more complex logic:"
              },
              {
                type: "code",
                language: "lua",
                filename: "nested_if.lua",
                code: "-- Nested if statements for complex game logic\nlocal isAlive = true\nlocal hasWeapon = true\nlocal ammo = 3\nlocal enemyDistance = 15\n\nif isAlive then\n    if hasWeapon then\n        if ammo > 0 then\n            if enemyDistance < 20 then\n                print(\"🎯 Fire! Enemy in range.\")\n                ammo -= 1\n            else\n                print(\"📏 Enemy too far away.\")\n            end\n        else\n            print(\"🔫 Out of ammo! Find more.\")\n        end\n    else\n        print(\"⚠️ Find a weapon first!\")\n    end\nelse\n    print(\"💀 You're defeated.\")\nend\n\n-- TIP: Deep nesting gets hard to read!\n-- Use 'guard clauses' (early returns) instead:\nlocal function tryAttack()\n    if not isAlive then print(\"💀 Defeated.\") return end\n    if not hasWeapon then print(\"⚠️ No weapon!\") return end\n    if ammo <= 0 then print(\"🔫 No ammo!\") return end\n    if enemyDistance >= 20 then print(\"📏 Too far!\") return end\n    \n    -- If we get here, ALL conditions are met!\n    print(\"🎯 Fire!\")\n    ammo -= 1\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Practical Example: Game Power-Up System"
              },
              {
                type: "code",
                language: "lua",
                filename: "powerup_system.lua",
                code: "local part = script.Parent\n\n-- Game state variables\nlocal playerHealth = 100\nlocal playerSpeed = 16  -- Default walk speed\nlocal hasPowerUp = false\nlocal powerUpType = \"speed\"  -- Could be \"speed\", \"health\", \"shield\"\n\n-- Simulate picking up a power-up\nwait(3)\nhasPowerUp = true\n\nif hasPowerUp then\n    if powerUpType == \"speed\" then\n        playerSpeed = playerSpeed * 2\n        part.BrickColor = BrickColor.new(\"Bright yellow\")\n        print(\"⚡ Speed Boost! Speed is now: \" .. playerSpeed)\n        \n    elseif powerUpType == \"health\" then\n        playerHealth = playerHealth + 50\n        if playerHealth > 100 then\n            playerHealth = 100  -- Cap at max health\n        end\n        part.BrickColor = BrickColor.new(\"Bright green\")\n        print(\"💚 Health restored! HP: \" .. playerHealth)\n        \n    elseif powerUpType == \"shield\" then\n        part.BrickColor = BrickColor.new(\"Bright blue\")\n        part.Material = Enum.Material.ForceField\n        print(\"🛡️ Shield activated!\")\n        \n    else\n        print(\"❓ Unknown power-up type: \" .. powerUpType)\n    end\nelse\n    print(\"No power-up active\")\nend"
              },
              {
                type: "tip",
                content: "Use parentheses to make complex conditions clearer! `if (a > 5 and b < 10) or c == true then` is much easier to read than `if a > 5 and b < 10 or c == true then`. When in doubt, add parentheses."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Write a script that checks a player's health and prints 'Healthy' (>75), 'Wounded' (26-75), or 'Critical' (≤25).",
                  "**Exercise 2:** Create a shop system: check if a player has enough coins AND a high enough level to buy an item.",
                  "**Exercise 3:** Write a grading system using elseif chains for scores 0-100.",
                  "**Exercise 4:** Build a part that changes color based on a random number: red (1-3), yellow (4-6), green (7-10).",
                  "**Exercise 5:** Create a time-of-day system: print different messages for morning (6-12), afternoon (12-18), evening (18-22), and night (22-6)."
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Practical: Access Control System"
              },
              {
                type: "text",
                content: "Let's build a practical door system that checks multiple conditions before allowing entry:"
              },
              {
                type: "code",
                language: "lua",
                filename: "access_control.lua",
                code: "-- Door access control system\n-- Put this script inside a door Part\n\nlocal door = script.Parent\nlocal REQUIRED_LEVEL = 5\nlocal REQUIRED_COINS = 100\nlocal VIP_NAMES = {\"Rathish\", \"Steve\", \"Alex\"}  -- VIP players\n\n-- Check if a name is in the VIP list\nlocal function isVIP(playerName)\n    for _, name in ipairs(VIP_NAMES) do\n        if name == playerName then\n            return true\n        end\n    end\n    return false\nend\n\nlocal debounce = false\n\ndoor.Touched:Connect(function(hit)\n    if debounce then return end\n    \n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if not humanoid then return end\n    \n    local player = game.Players:GetPlayerFromCharacter(hit.Parent)\n    if not player then return end\n    \n    debounce = true\n    \n    local leaderstats = player:FindFirstChild(\"leaderstats\")\n    local coins = leaderstats and leaderstats:FindFirstChild(\"Coins\")\n    local stage = leaderstats and leaderstats:FindFirstChild(\"Stage\")\n    \n    -- VIP players always get in!\n    if isVIP(player.Name) then\n        print(\"⭐ VIP Access granted for \" .. player.Name)\n        door.Transparency = 0.8\n        door.CanCollide = false\n        wait(3)\n        door.Transparency = 0\n        door.CanCollide = true\n    \n    -- Check level AND coins for non-VIP\n    elseif stage and stage.Value >= REQUIRED_LEVEL \n       and coins and coins.Value >= REQUIRED_COINS then\n        print(\"✅ Access granted for \" .. player.Name)\n        door.Transparency = 0.8\n        door.CanCollide = false\n        wait(3)\n        door.Transparency = 0\n        door.CanCollide = true\n    \n    else\n        -- Access denied — figure out why\n        if stage and stage.Value < REQUIRED_LEVEL then\n            print(\"❌ \" .. player.Name .. \" needs Level \" .. REQUIRED_LEVEL)\n        end\n        if coins and coins.Value < REQUIRED_COINS then\n            print(\"❌ \" .. player.Name .. \" needs \" .. REQUIRED_COINS .. \" coins\")\n        end\n    end\n    \n    wait(1)\n    debounce = false\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Ternary-Style Expressions"
              },
              {
                type: "code",
                language: "lua",
                filename: "ternary_style.lua",
                code: "-- Lua doesn't have a true ternary operator (condition ? a : b)\n-- But you can use 'and/or' as a shorthand:\n\nlocal health = 30\n\n-- Long way:\nlocal status\nif health > 50 then\n    status = \"Healthy\"\nelse\n    status = \"Wounded\"\nend\n\n-- Short way (ternary-style):\nlocal status = health > 50 and \"Healthy\" or \"Wounded\"\nprint(status)  -- \"Wounded\"\n\n-- More examples:\nlocal isVIP = true\nlocal greeting = isVIP and \"Welcome, VIP!\" or \"Hello!\"\nprint(greeting)  -- \"Welcome, VIP!\"\n\nlocal coins = 0\nlocal message = coins > 0 and (coins .. \" coins\") or \"No coins yet\"\nprint(message)  -- \"No coins yet\"\n\n-- Useful for setting defaults:\nlocal playerName = nil\nlocal displayName = playerName or \"Unknown Player\"\nprint(displayName)  -- \"Unknown Player\""
              },
              {
                type: "warning",
                content: "The ternary-style `condition and valueIfTrue or valueIfFalse` has a gotcha: if valueIfTrue is false or nil, it returns valueIfFalse instead! For example, `true and false or \"fallback\"` returns \"fallback\" instead of false. Use regular if/else when the true value might be false or nil."
              },
              {
                type: "checkpoint",
                content: "Create a script that checks coins and level variables, then prints different messages: 'Poor' (< 10 coins), 'Getting there' (10-50), 'Rich' (> 50). Add a level check: only allow purchases if coins >= price AND level >= 5."
              }
            ]
          }
        },
        {
          id: "2-3",
          title: "Loops — Repeating Actions",
          completed: false,
          content: {
            description: "Master all three loop types in Lua — while loops, for loops, and repeat-until loops. Learn to automate repetitive tasks, create timers, and build game loops.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll use while loops, numeric for loops, generic for loops, and repeat-until loops to automate any repetitive task in your games.

**Loops** repeat blocks of code automatically. Instead of writing the same code 100 times, you write it once inside a loop. They're essential for countdowns, spawning enemies, animating objects, checking game conditions, and processing lists of items.

Imagine you want to spawn 50 coins around your map. Without loops, you'd need 50 separate sections of code — tedious and error-prone. With a loop, it's 5 lines.`
              },
              {
                type: "heading",
                level: 2,
                content: "While Loops"
              },
              {
                type: "code",
                language: "lua",
                filename: "while_loops.lua",
                code: "-- while loops run AS LONG AS the condition is true\n\n-- Countdown timer\nlocal countdown = 10\n\nwhile countdown > 0 do\n    print(\"⏱️ \" .. countdown .. \" seconds remaining...\")\n    countdown = countdown - 1\n    wait(1)\nend\nprint(\"🚀 Blast off!\")\n\n-- The loop checks the condition BEFORE each run:\n-- Is countdown > 0? Yes (10) → run the code, countdown becomes 9\n-- Is countdown > 0? Yes (9)  → run the code, countdown becomes 8\n-- ... (keeps going)\n-- Is countdown > 0? Yes (1)  → run the code, countdown becomes 0\n-- Is countdown > 0? No (0)   → STOP! Exit the loop"
              },
              {
                type: "heading",
                level: 2,
                content: "Infinite Loops (while true do)"
              },
              {
                type: "code",
                language: "lua",
                filename: "infinite_loop.lua",
                code: "-- while true do = run forever (very common in Roblox!)\n-- Used for game loops, spawners, timed events\n\nlocal part = script.Parent\n\n-- Pulsing glow effect (runs forever)\nwhile true do\n    -- Fade out\n    for i = 0, 10 do\n        part.Transparency = i / 10\n        wait(0.05)\n    end\n    -- Fade in\n    for i = 10, 0, -1 do\n        part.Transparency = i / 10\n        wait(0.05)\n    end\nend\n\n-- ⚠️ CRITICAL: Always include wait() in while true loops!\n-- Without wait(), the loop runs infinitely fast and FREEZES the game!"
              },
              {
                type: "warning",
                content: "ALWAYS include wait() inside 'while true do' loops! Without a wait, the loop runs millions of times per second and locks up the entire game. Even wait() with no argument (which waits one frame) is enough. This is the most common beginner crash."
              },
              {
                type: "heading",
                level: 2,
                content: "Numeric For Loops"
              },
              {
                type: "code",
                language: "lua",
                filename: "for_loops.lua",
                code: "-- for loops count from a start number to an end number\n-- Format: for variable = start, stop, step do\n\n-- Count from 1 to 10\nfor i = 1, 10 do\n    print(i)  -- 1, 2, 3, 4, 5, 6, 7, 8, 9, 10\nend\n\n-- Count by 2s (step = 2)\nfor i = 0, 10, 2 do\n    print(i)  -- 0, 2, 4, 6, 8, 10\nend\n\n-- Count backwards (step = -1)\nfor i = 5, 1, -1 do\n    print(i)  -- 5, 4, 3, 2, 1\nend\nprint(\"Go!\")\n\n-- The step is optional — defaults to 1\n-- If step is positive, loop runs while i <= stop\n-- If step is negative, loop runs while i >= stop\n\n-- Practical: Spawn 10 platforms in a row\nfor i = 1, 10 do\n    local platform = Instance.new(\"Part\")\n    platform.Size = Vector3.new(6, 1, 6)\n    platform.Position = Vector3.new(i * 8, i * 3, 0)\n    platform.Anchored = true\n    platform.BrickColor = BrickColor.Random()\n    platform.Parent = workspace\nend\nprint(\"10 platforms created!\")"
              },
              {
                type: "heading",
                level: 2,
                content: "Generic For Loops (ipairs and pairs)"
              },
              {
                type: "code",
                language: "lua",
                filename: "generic_for.lua",
                code: "-- Loop through a list with ipairs\nlocal fruits = {\"Apple\", \"Banana\", \"Cherry\", \"Date\"}\n\nfor index, fruit in ipairs(fruits) do\n    print(index .. \": \" .. fruit)\nend\n-- Output:\n-- 1: Apple\n-- 2: Banana\n-- 3: Cherry\n-- 4: Date\n\n-- Loop through a dictionary with pairs\nlocal playerStats = {\n    health = 100,\n    speed = 16,\n    coins = 50\n}\n\nfor key, value in pairs(playerStats) do\n    print(key .. \" = \" .. value)\nend\n-- Output (order may vary!):\n-- health = 100\n-- speed = 16\n-- coins = 50\n\n-- Loop through all children of an object\nfor _, child in ipairs(workspace:GetChildren()) do\n    print(child.Name .. \" (\" .. child.ClassName .. \")\")\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Break and Continue"
              },
              {
                type: "code",
                language: "lua",
                filename: "break_continue.lua",
                code: "-- break: EXIT the loop immediately\nfor i = 1, 100 do\n    print(i)\n    if i == 5 then\n        print(\"Found 5! Stopping early.\")\n        break  -- Loop ends here, even though it could go to 100\n    end\nend\n-- Output: 1, 2, 3, 4, 5, Found 5!\n\n-- continue: SKIP to the next iteration (Luau/Roblox only)\nfor i = 1, 10 do\n    if i % 2 == 0 then  -- If i is even\n        continue  -- Skip even numbers\n    end\n    print(i)  -- Only prints odd numbers\nend\n-- Output: 1, 3, 5, 7, 9\n\n-- Practical: Find a specific part\nfor _, child in ipairs(workspace:GetChildren()) do\n    if child.Name == \"TreasureChest\" then\n        print(\"Found the treasure at: \" .. tostring(child.Position))\n        break  -- Stop searching once found\n    end\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Practical Example: Moving Platform"
              },
              {
                type: "code",
                language: "lua",
                filename: "moving_platform.lua",
                code: "local part = script.Parent\nlocal startPosition = part.Position\nlocal moveDistance = 20  -- studs to move\nlocal moveSpeed = 0.5    -- seconds per step\nlocal steps = 40         -- number of steps\n\nwhile true do\n    -- Move right\n    for i = 1, steps do\n        part.Position = startPosition + Vector3.new(\n            (i / steps) * moveDistance, 0, 0\n        )\n        wait(moveSpeed / steps)\n    end\n    \n    -- Move back left\n    for i = steps, 1, -1 do\n        part.Position = startPosition + Vector3.new(\n            (i / steps) * moveDistance, 0, 0\n        )\n        wait(moveSpeed / steps)\n    end\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create a countdown timer from 10 to 0 that prints each number, then prints 'Game Start!'",
                  "**Exercise 2:** Use a for loop to spawn 5 parts in a vertical tower (each 5 studs higher than the last).",
                  "**Exercise 3:** Write a while loop that generates random numbers until it gets a number greater than 90. Print how many tries it took.",
                  "**Exercise 4:** Create a part that moves back and forth using a while true loop.",
                  "**Exercise 5:** Loop through all objects in Workspace and print only the ones that are Parts."
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Repeat-Until Loops"
              },
              {
                type: "text",
                content: "The repeat-until loop is the opposite of while: it runs the code first, THEN checks the condition. This guarantees the code runs at least once:"
              },
              {
                type: "code",
                language: "lua",
                filename: "repeat_until.lua",
                code: "-- repeat-until: runs code, THEN checks the condition\n-- Loop continues until the condition is TRUE\n\n-- Roll dice until you get a 6\nlocal rolls = 0\nlocal result\n\nrepeat\n    result = math.random(1, 6)\n    rolls += 1\n    print(\"Roll \" .. rolls .. \": \" .. result)\nuntil result == 6  -- Stop when result IS 6\n\nprint(\"Got a 6 after \" .. rolls .. \" rolls!\")\n\n-- Difference from while:\n-- while: checks BEFORE running (might run 0 times)\n-- repeat: checks AFTER running (runs at least 1 time)\n\n-- Practical: Wait for a player's character to fully load\nlocal player = game.Players.LocalPlayer\nlocal character\n\nrepeat\n    character = player.Character\n    if not character then wait(0.1) end\nuntil character\nprint(\"Character loaded!\")"
              },
              {
                type: "heading",
                level: 2,
                content: "Nested Loops — Loops Inside Loops"
              },
              {
                type: "code",
                language: "lua",
                filename: "nested_loops.lua",
                code: "-- Create a grid of parts (10x10)\nlocal GRID_SIZE = 10\nlocal SPACING = 4\n\nfor row = 1, GRID_SIZE do\n    for col = 1, GRID_SIZE do\n        local part = Instance.new(\"Part\")\n        part.Size = Vector3.new(3, 1, 3)\n        part.Position = Vector3.new(\n            col * SPACING,  -- X position\n            0.5,            -- Y (ground level)\n            row * SPACING   -- Z position\n        )\n        part.Anchored = true\n        \n        -- Checkerboard pattern!\n        if (row + col) % 2 == 0 then\n            part.BrickColor = BrickColor.new(\"White\")\n        else\n            part.BrickColor = BrickColor.new(\"Black\")\n        end\n        \n        part.Parent = workspace\n    end\nend\nprint(\"Created a \" .. GRID_SIZE .. \"x\" .. GRID_SIZE .. \" checkerboard!\")\n\n-- Create a spiral staircase!\nlocal STEPS = 30\nlocal RADIUS = 10\nlocal HEIGHT_PER_STEP = 1.5\nlocal ANGLE_PER_STEP = 15  -- degrees\n\nfor i = 1, STEPS do\n    local angle = math.rad(i * ANGLE_PER_STEP)\n    local step = Instance.new(\"Part\")\n    step.Size = Vector3.new(6, 1, 3)\n    step.Position = Vector3.new(\n        math.cos(angle) * RADIUS,\n        i * HEIGHT_PER_STEP,\n        math.sin(angle) * RADIUS\n    )\n    step.Orientation = Vector3.new(0, -i * ANGLE_PER_STEP, 0)\n    step.Anchored = true\n    step.Material = Enum.Material.Marble\n    step.BrickColor = BrickColor.new(\"White\")\n    step.Parent = workspace\nend\nprint(\"Spiral staircase complete!\")"
              },
              {
                type: "tip",
                content: "Nested loops are powerful but be careful with large numbers! A 100x100 grid creates 10,000 parts — which can lag. Keep your grid sizes reasonable. If you need large worlds, look into chunked loading."
              },
              {
                type: "heading",
                level: 2,
                content: "Loop Patterns — Common Recipes"
              },
              {
                type: "code",
                language: "lua",
                filename: "loop_patterns.lua",
                code: "-- PATTERN 1: Find the maximum value in a table\nlocal scores = {45, 82, 67, 93, 28, 55, 71}\nlocal maxScore = scores[1]\n\nfor _, score in ipairs(scores) do\n    if score > maxScore then\n        maxScore = score\n    end\nend\nprint(\"Highest score: \" .. maxScore)  -- 93\n\n-- PATTERN 2: Filter items from a list\nlocal allParts = workspace:GetChildren()\nlocal redParts = {}\n\nfor _, obj in ipairs(allParts) do\n    if obj:IsA(\"Part\") and obj.BrickColor == BrickColor.new(\"Bright red\") then\n        table.insert(redParts, obj)\n    end\nend\nprint(\"Found \" .. #redParts .. \" red parts\")\n\n-- PATTERN 3: Countdown with visual feedback\nlocal part = script.Parent\nfor i = 3, 1, -1 do\n    part.BrickColor = BrickColor.new(\"Bright yellow\")\n    wait(0.5)\n    part.BrickColor = BrickColor.new(\"White\")\n    wait(0.5)\nend\npart.BrickColor = BrickColor.new(\"Lime green\")  -- Go!\n\n-- PATTERN 4: Animate a value smoothly\nlocal startVal = 0\nlocal endVal = 100\nlocal steps = 50\n\nfor i = 0, steps do\n    local progress = i / steps  -- 0 to 1\n    local currentVal = startVal + (endVal - startVal) * progress\n    print(string.format(\"Progress: %.0f%%\", currentVal))\n    wait(0.05)\nend"
              },
              {
                type: "quiz",
                question: "What does 'for i = 1, 3 do print(i) end' print?",
                options: [
                  { id: "a", text: "1" },
                  { id: "b", text: "1, 2, 3" },
                  { id: "c", text: "3" },
                  { id: "d", text: "Nothing" }
                ],
                correct: "b",
                explanation: "The for loop counts from 1 to 3, executing the print statement each time. So it prints 1, then 2, then 3."
              }
            ]
          }
        },
        {
          id: "2-4",
          title: "Functions — Reusable Code Blocks",
          completed: false,
          content: {
            description: "Create reusable, organized code with functions. Learn parameters, return values, and how functions make complex games manageable.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll create your own functions with parameters and return values, and understand how they organize complex game code.

**Functions** are named blocks of code you can call (run) whenever you need them. Think of them like abilities in a game — you define the ability once, then activate it anytime by pressing the button. Without functions, you'd have to rewrite the same code every time you wanted to use it. With functions, you write it once and call it hundreds of times.

Functions are what separate messy beginner code from clean professional code. Every serious Roblox game uses hundreds of functions to stay organized and maintainable.`
              },
              {
                type: "heading",
                level: 2,
                content: "Creating and Calling Functions"
              },
              {
                type: "code",
                language: "lua",
                filename: "functions_basic.lua",
                code: "-- Defining a function\nlocal function sayHello()\n    print(\"Hello, Roblox Developer!\")\n    print(\"Welcome to the game!\")\nend\n\n-- Calling (running) the function\nsayHello()   -- Prints both messages\nsayHello()   -- Prints them again!\nsayHello()   -- And again! Reusable!\n\n-- The function only runs when you CALL it\n-- Defining it just stores the code — it doesn't run it"
              },
              {
                type: "heading",
                level: 2,
                content: "Parameters — Passing Data In"
              },
              {
                type: "code",
                language: "lua",
                filename: "parameters.lua",
                code: "-- Parameters let you pass data INTO a function\nlocal function greetPlayer(playerName)\n    print(\"Welcome, \" .. playerName .. \"!\")\nend\n\ngreetPlayer(\"Steve\")    -- Welcome, Steve!\ngreetPlayer(\"Alex\")     -- Welcome, Alex!\ngreetPlayer(\"Dragon\")   -- Welcome, Dragon!\n\n-- Multiple parameters\nlocal function addNumbers(a, b)\n    local sum = a + b\n    print(a .. \" + \" .. b .. \" = \" .. sum)\nend\n\naddNumbers(5, 3)    -- 5 + 3 = 8\naddNumbers(100, 42) -- 100 + 42 = 142\n\n-- Default values (Luau feature)\nlocal function createEnemy(name, health, speed)\n    health = health or 100  -- Default to 100 if nil\n    speed = speed or 16     -- Default to 16 if nil\n    print(name .. \": HP=\" .. health .. \" SPD=\" .. speed)\nend\n\ncreateEnemy(\"Goblin\")          -- Goblin: HP=100 SPD=16\ncreateEnemy(\"Orc\", 200)        -- Orc: HP=200 SPD=16\ncreateEnemy(\"Dragon\", 500, 24) -- Dragon: HP=500 SPD=24"
              },
              {
                type: "heading",
                level: 2,
                content: "Return Values — Getting Data Out"
              },
              {
                type: "code",
                language: "lua",
                filename: "return_values.lua",
                code: "-- 'return' sends a value BACK to the caller\nlocal function calculateDamage(baseDamage, multiplier)\n    local total = baseDamage * multiplier\n    return total  -- Send the result back\nend\n\n-- Capture the returned value in a variable\nlocal damage = calculateDamage(25, 2)\nprint(\"Damage dealt: \" .. damage)  -- Damage dealt: 50\n\n-- Use return values directly in expressions\nif calculateDamage(30, 1.5) > 40 then\n    print(\"That's a powerful hit!\")\nend\n\n-- Return multiple values\nlocal function getPlayerInfo()\n    return \"Steve\", 100, 50  -- name, health, coins\nend\n\nlocal name, hp, coins = getPlayerInfo()\nprint(name .. \" has \" .. hp .. \" HP and \" .. coins .. \" coins\")"
              },
              {
                type: "heading",
                level: 2,
                content: "Practical Example: Complete Health System"
              },
              {
                type: "code",
                language: "lua",
                filename: "health_system.lua",
                code: "-- A complete health system using functions\n\nlocal health = 100\nlocal maxHealth = 100\nlocal isAlive = true\n\nlocal function takeDamage(amount)\n    if not isAlive then\n        print(\"Already defeated!\")\n        return\n    end\n    \n    health = health - amount\n    print(\"💔 Took \" .. amount .. \" damage! HP: \" .. health .. \"/\" .. maxHealth)\n    \n    if health <= 0 then\n        health = 0\n        isAlive = false\n        print(\"💀 Game Over!\")\n    elseif health < 25 then\n        print(\"⚠️ CRITICAL HEALTH!\")\n    end\nend\n\nlocal function heal(amount)\n    if not isAlive then\n        print(\"Can't heal — you're defeated!\")\n        return\n    end\n    \n    local oldHealth = health\n    health = math.min(health + amount, maxHealth)  -- Don't exceed max!\n    local actualHeal = health - oldHealth\n    \n    print(\"💚 Healed \" .. actualHeal .. \" HP! Health: \" .. health .. \"/\" .. maxHealth)\nend\n\nlocal function getHealthPercent()\n    return (health / maxHealth) * 100\nend\n\n-- Test the system!\ntakeDamage(30)   -- HP: 70/100\ntakeDamage(50)   -- HP: 20/100 (CRITICAL!)\nheal(40)         -- HP: 60/100\nprint(\"Health: \" .. getHealthPercent() .. \"%\")  -- 60%"
              },
              {
                type: "tip",
                content: "Keep functions small and focused! A function called 'calculateDamage' should ONLY calculate damage — not also update the UI, play sounds, and send server messages. If your function does too many things, split it into smaller functions. This is called the 'Single Responsibility Principle'."
              },
              {
                type: "heading",
                level: 2,
                content: "Anonymous Functions & Callbacks"
              },
              {
                type: "text",
                content: "You've already used anonymous functions with events! Let's understand them formally:"
              },
              {
                type: "code",
                language: "lua",
                filename: "anonymous_functions.lua",
                code: "-- NAMED function (has a name, stored in a variable)\nlocal function greet(name)\n    print(\"Hello, \" .. name)\nend\ngreet(\"Steve\")  -- Call by name\n\n-- ANONYMOUS function (no name, used inline)\n-- You've been using these with :Connect()!\npart.Touched:Connect(function(hit)\n    print(\"Touched by \" .. hit.Name)\nend)\n-- The function has no name — it's defined right where it's used\n\n-- Storing anonymous function in a variable (same as named!)\nlocal greet = function(name)\n    print(\"Hello, \" .. name)\nend\ngreet(\"Alex\")  -- Works exactly the same!\n\n-- Passing functions as arguments (callbacks)\nlocal function doAfterDelay(seconds, callback)\n    wait(seconds)\n    callback()  -- Call the function we were given\nend\n\ndoAfterDelay(3, function()\n    print(\"This runs after 3 seconds!\")\nend)\n\n-- Practical: Custom forEach function\nlocal function forEach(list, action)\n    for i, item in ipairs(list) do\n        action(item, i)\n    end\nend\n\nlocal items = {\"Sword\", \"Shield\", \"Potion\"}\nforEach(items, function(item, index)\n    print(index .. \". \" .. item)\nend)\n-- 1. Sword\n-- 2. Shield\n-- 3. Potion"
              },
              {
                type: "heading",
                level: 2,
                content: "Practical: Part Factory Function"
              },
              {
                type: "code",
                language: "lua",
                filename: "part_factory.lua",
                code: "-- A function that creates configured parts — a 'factory'\nlocal function createPart(config)\n    config = config or {}  -- Default to empty table\n    \n    local part = Instance.new(\"Part\")\n    part.Name = config.name or \"Part\"\n    part.Size = config.size or Vector3.new(4, 4, 4)\n    part.Position = config.position or Vector3.new(0, 5, 0)\n    part.BrickColor = config.color or BrickColor.new(\"Medium stone grey\")\n    part.Material = config.material or Enum.Material.SmoothPlastic\n    part.Anchored = true\n    part.CanCollide = config.canCollide ~= false  -- Default true\n    part.Transparency = config.transparency or 0\n    part.Parent = config.parent or workspace\n    \n    -- Optional: add a light\n    if config.glow then\n        local light = Instance.new(\"PointLight\")\n        light.Color = part.Color\n        light.Range = config.glowRange or 10\n        light.Brightness = config.glowBrightness or 1\n        light.Parent = part\n    end\n    \n    return part\nend\n\n-- Usage: clean and readable!\nlocal wall = createPart({\n    name = \"Wall\",\n    size = Vector3.new(20, 12, 1),\n    position = Vector3.new(0, 6, 10),\n    color = BrickColor.new(\"Brick yellow\"),\n    material = Enum.Material.Brick,\n})\n\nlocal glowOrb = createPart({\n    name = \"GlowOrb\",\n    size = Vector3.new(2, 2, 2),\n    position = Vector3.new(5, 8, 5),\n    color = BrickColor.new(\"Cyan\"),\n    material = Enum.Material.Neon,\n    glow = true,\n    glowRange = 20,\n})"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create a function `calculateScore(kills, coins, time)` that returns kills*100 + coins*10 - time*5.",
                  "**Exercise 2:** Write a `clamp(value, min, max)` function that ensures a value stays within a range.",
                  "**Exercise 3:** Build the createPart factory function from above and use it to create 5 different parts.",
                  "**Exercise 4:** Create a complete combat system with takeDamage(), heal(), and isAlive() functions.",
                  "**Exercise 5:** Write a function that takes a table of numbers and returns both the average AND the highest value (two return values)."
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Scope — Where Variables Live"
              },
              {
                type: "text",
                content: "Understanding scope is crucial for writing bug-free code. A variable's scope determines where it can be accessed:"
              },
              {
                type: "code",
                language: "lua",
                filename: "scope_explained.lua",
                code: "-- Global scope (DON'T do this unless necessary!)\nglobalVar = \"I'm accessible everywhere\"  -- No 'local' keyword\n\n-- Local to the script\nlocal scriptVar = \"I'm available throughout this script\"\n\nlocal function outerFunction()\n    local outerVar = \"I exist inside outerFunction\"\n    \n    local function innerFunction()\n        local innerVar = \"I exist inside innerFunction\"\n        \n        -- I CAN access outerVar and scriptVar from here\n        print(outerVar)    -- ✅ Works!\n        print(scriptVar)   -- ✅ Works!\n        print(innerVar)    -- ✅ Works!\n    end\n    \n    innerFunction()\n    \n    -- I CANNOT access innerVar here\n    print(outerVar)    -- ✅ Works!\n    -- print(innerVar)    -- ❌ ERROR! innerVar doesn't exist here\nend\n\nouterFunction()\n-- print(outerVar)  -- ❌ ERROR! outerVar doesn't exist here\n\n-- KEY RULE: Variables are accessible in their block\n-- and any INNER blocks, but NOT in outer blocks"
              },
              {
                type: "heading",
                level: 2,
                content: "Tables as Organized Data"
              },
              {
                type: "code",
                language: "lua",
                filename: "tables_intro.lua",
                code: "-- Tables are Lua's most powerful data type\n-- They can act as arrays, dictionaries, or objects\n\n-- ARRAY-STYLE TABLE (numbered list)\nlocal inventory = {\"Sword\", \"Shield\", \"Potion\", \"Gold Key\"}\nprint(inventory[1])  -- Sword (Lua arrays start at 1, not 0!)\nprint(inventory[3])  -- Potion\nprint(#inventory)    -- 4 (# = length operator)\n\n-- Add items\ntable.insert(inventory, \"Bow\")       -- Adds to end\ntable.insert(inventory, 2, \"Armor\")  -- Insert at position 2\n\n-- Remove items\ntable.remove(inventory, 3)  -- Remove item at position 3\n\n-- DICTIONARY-STYLE TABLE (key-value pairs)\nlocal player = {\n    name = \"DragonSlayer\",\n    health = 100,\n    level = 15,\n    isVIP = true,\n}\n\nprint(player.name)     -- DragonSlayer\nprint(player.health)   -- 100\nprint(player[\"level\"]) -- 15 (alternative syntax)\n\n-- Add/modify entries\nplayer.mana = 50           -- Add new key\nplayer.health = 75         -- Modify existing\nplayer.title = \"The Brave\" -- Add another\n\n-- NESTED TABLES (tables inside tables)\nlocal team = {\n    {\n        name = \"Warrior\",\n        health = 200,\n        skills = {\"Slash\", \"Shield Bash\", \"War Cry\"}\n    },\n    {\n        name = \"Mage\",\n        health = 80,\n        skills = {\"Fireball\", \"Ice Shield\", \"Teleport\"}\n    },\n}\n\nprint(team[1].name)         -- Warrior\nprint(team[2].skills[1])    -- Fireball"
              },
              {
                type: "warning",
                content: "Lua arrays start at index 1, not 0! This is different from most programming languages. inventory[1] is the first item, inventory[2] is the second, and so on. Using inventory[0] typically returns nil."
              },
              {
                type: "heading",
                level: 2,
                content: "Practical: Item Database with Functions"
              },
              {
                type: "code",
                language: "lua",
                filename: "item_database.lua",
                code: "-- Building a real game system with functions and tables\n\nlocal ItemDatabase = {\n    [\"Wooden Sword\"] = {damage = 10, price = 25, level = 1},\n    [\"Iron Sword\"]   = {damage = 25, price = 100, level = 5},\n    [\"Gold Sword\"]   = {damage = 50, price = 500, level = 10},\n    [\"Diamond Sword\"]= {damage = 100, price = 2000, level = 20},\n}\n\nlocal function canAfford(playerCoins, itemName)\n    local item = ItemDatabase[itemName]\n    if not item then\n        return false, \"Item doesn't exist!\"\n    end\n    if playerCoins < item.price then\n        return false, \"Need \" .. (item.price - playerCoins) .. \" more coins\"\n    end\n    return true, \"Can afford!\"\nend\n\nlocal function canEquip(playerLevel, itemName)\n    local item = ItemDatabase[itemName]\n    if not item then return false end\n    return playerLevel >= item.level\nend\n\nlocal function getItemInfo(itemName)\n    local item = ItemDatabase[itemName]\n    if not item then\n        return \"Unknown item\"\n    end\n    return string.format(\n        \"%s — DMG: %d | Price: %d coins | Requires Level %d\",\n        itemName, item.damage, item.price, item.level\n    )\nend\n\n-- Usage:\nprint(getItemInfo(\"Iron Sword\"))\n-- Iron Sword — DMG: 25 | Price: 100 coins | Requires Level 5\n\nlocal ok, msg = canAfford(80, \"Iron Sword\")\nprint(ok, msg)  -- false, Need 20 more coins"
              },
              {
                type: "checkpoint",
                content: "Create a function called 'calculateScore' that takes kills, coins, and timeBonus as parameters and returns the total score. Then call it 3 times with different values and print each result."
              }
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: "Game Objects & Events",
      lessons: [
        {
          id: "3-1",
          title: "Finding & Referencing Objects",
          completed: false,
          content: {
            description: "Learn every method to find and reference objects in your game — parts, players, services, and nested objects deep in the hierarchy.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll confidently navigate Roblox's object hierarchy, use all object-finding methods, and understand when to use each one.

To control anything in your game with code, you first need to **find it**. A script can't change a door's color if it doesn't know where the door is. Roblox provides several methods for finding objects, each suited to different situations. Mastering these methods is essential — you'll use them in every single script you write.`
              },
              {
                type: "heading",
                level: 2,
                content: "The Game Hierarchy"
              },
              {
                type: "code",
                language: "text",
                filename: "full_hierarchy.txt",
                code: "game (DataModel) — The root of everything\n├── Workspace              ← 3D world: parts, models, terrain\n│   ├── Camera             ← The player's viewpoint\n│   ├── Terrain            ← Voxel terrain system\n│   ├── SpawnLocation      ← Where players appear\n│   ├── House (Model)      ← Your grouped objects\n│   │   ├── Floor (Part)\n│   │   ├── Wall (Part)\n│   │   └── Door (Part)\n│   └── Coins (Folder)     ← Organized collections\n│       ├── Coin1\n│       └── Coin2\n├── Players                ← All connected players\n│   └── Steve (Player)     ← Individual player\n│       ├── Backpack       ← Player's tools\n│       └── leaderstats    ← Score display\n├── ReplicatedStorage      ← Shared between client & server\n├── ServerScriptService    ← Server-only scripts\n├── ServerStorage          ← Server-only assets\n├── StarterGui             ← UI given to each player\n├── StarterPack            ← Tools given to each player\n├── StarterPlayer          ← Player defaults\n└── Lighting               ← Visual atmosphere"
              },
              {
                type: "heading",
                level: 2,
                content: "Methods for Finding Objects"
              },
              {
                type: "code",
                language: "lua",
                filename: "finding_objects.lua",
                code: "-- METHOD 1: script.Parent (most common!)\n-- Gets the object that CONTAINS this script\nlocal part = script.Parent\n-- If script is inside a Part, part IS that Part\n\n-- METHOD 2: Direct path (dot notation)\n-- Navigate the hierarchy like a file path\nlocal door = game.Workspace.House.Door\nlocal coin = game.Workspace.Coins.GoldCoin\n-- ⚠️ Errors if object doesn't exist!\n\n-- METHOD 3: FindFirstChild (safe!)\n-- Returns nil instead of erroring if not found\nlocal door = workspace:FindFirstChild(\"Door\")\nif door then\n    print(\"Found the door!\")\n    door.BrickColor = BrickColor.new(\"Bright red\")\nelse\n    print(\"Door not found!\")\nend\n\n-- METHOD 4: WaitForChild (waits until it exists)\n-- Essential for objects that load after the script runs\nlocal player = game.Players:WaitForChild(\"Steve\")\n-- Pauses the script until \"Steve\" appears!\n\n-- METHOD 5: FindFirstChildOfClass (by type)\nlocal firstPart = workspace:FindFirstChildOfClass(\"Part\")\n-- Finds the first Part, regardless of name\n\n-- METHOD 6: GetService (for Roblox services)\nlocal Players = game:GetService(\"Players\")\nlocal Lighting = game:GetService(\"Lighting\")\nlocal TweenService = game:GetService(\"TweenService\")"
              },
              {
                type: "tip",
                content: "Use FindFirstChild when you're not sure an object exists (returns nil safely). Use WaitForChild when you KNOW it will exist but it might not have loaded yet (like player characters). Use direct paths only when you're 100% sure the object is there."
              },
              {
                type: "heading",
                level: 2,
                content: "Getting Children and Descendants"
              },
              {
                type: "code",
                language: "lua",
                filename: "children_descendants.lua",
                code: "-- GetChildren: direct children only (one level deep)\nlocal children = workspace:GetChildren()\nfor _, child in ipairs(children) do\n    print(child.Name)\nend\n\n-- GetDescendants: ALL nested objects (every level)\nlocal everything = workspace:GetDescendants()\nfor _, obj in ipairs(everything) do\n    if obj:IsA(\"Part\") then\n        print(\"Found Part: \" .. obj.Name)\n    end\nend\n\n-- Useful shortcut: workspace = game.Workspace\nprint(workspace == game.Workspace)  -- true!"
              },
              {
                type: "heading",
                level: 2,
                content: "Working with Players"
              },
              {
                type: "code",
                language: "lua",
                filename: "finding_players.lua",
                code: "local Players = game:GetService(\"Players\")\n\n-- Get all current players\nlocal allPlayers = Players:GetPlayers()\nfor _, player in ipairs(allPlayers) do\n    print(player.Name .. \" is playing!\")\nend\n\n-- Get a specific player\nlocal steve = Players:FindFirstChild(\"Steve\")\n\n-- Get the local player (client scripts only!)\n-- Only works in LocalScripts, NOT in server Scripts\nlocal localPlayer = Players.LocalPlayer\n\n-- Convert a character model to a player\nlocal function getPlayerFromCharacter(character)\n    return Players:GetPlayerFromCharacter(character)\nend\n\n-- Get a player's character (their 3D model in the world)\nlocal player = Players:FindFirstChild(\"Steve\")\nif player then\n    local character = player.Character\n    if character then\n        local humanoid = character:FindFirstChildOfClass(\"Humanoid\")\n        print(\"Health: \" .. humanoid.Health)\n    end\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create 3 parts named 'Red', 'Green', 'Blue'. Write a script that finds each by name and sets its color accordingly.",
                  "**Exercise 2:** Use GetChildren() to loop through everything in Workspace and print each object's Name and ClassName.",
                  "**Exercise 3:** Create a folder with 5 parts. Use GetDescendants() and :IsA('Part') to find and count only the Parts.",
                  "**Exercise 4:** Write a function findPartByName(name) that searches the entire Workspace and returns the Part or nil.",
                  "**Exercise 5:** Practice with FindFirstChild — try finding an object that doesn't exist and handle the nil case gracefully."
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "The :IsA() Method — Type Checking"
              },
              {
                type: "text",
                content: "IsA() checks if an object is a specific type (class). It also checks parent classes, making it very flexible:"
              },
              {
                type: "code",
                language: "lua",
                filename: "isa_method.lua",
                code: "-- :IsA() checks the class of an object\nlocal part = Instance.new(\"Part\")\nprint(part:IsA(\"Part\"))       -- true\nprint(part:IsA(\"BasePart\"))   -- true (Part inherits from BasePart)\nprint(part:IsA(\"Instance\"))   -- true (everything is an Instance)\nprint(part:IsA(\"Model\"))      -- false\n\n-- Practical: Find all parts in Workspace (including MeshParts!)\nfor _, obj in ipairs(workspace:GetDescendants()) do\n    if obj:IsA(\"BasePart\") then\n        -- This catches: Part, MeshPart, WedgePart, etc.\n        print(obj.Name .. \" is a \" .. obj.ClassName)\n    end\nend\n\n-- Practical: Count scripts in the game\nlocal scriptCount = 0\nfor _, obj in ipairs(game:GetDescendants()) do\n    if obj:IsA(\"LuaSourceContainer\") then\n        -- Catches: Script, LocalScript, ModuleScript\n        scriptCount += 1\n    end\nend\nprint(\"Total scripts: \" .. scriptCount)\n\n-- Practical: Destroy all lights in workspace\nfor _, obj in ipairs(workspace:GetDescendants()) do\n    if obj:IsA(\"Light\") then  -- PointLight, SpotLight, SurfaceLight\n        obj:Destroy()\n    end\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Attributes — Custom Properties"
              },
              {
                type: "text",
                content: "Attributes let you add custom data to any object — like custom properties you define yourself:"
              },
              {
                type: "code",
                language: "lua",
                filename: "attributes.lua",
                code: "-- Set custom attributes on any object\nlocal part = workspace.Door\n\n-- Setting attributes\npart:SetAttribute(\"IsLocked\", true)\npart:SetAttribute(\"RequiredKey\", \"GoldKey\")\npart:SetAttribute(\"DamageAmount\", 25)\n\n-- Getting attributes\nlocal isLocked = part:GetAttribute(\"IsLocked\")\nlocal keyNeeded = part:GetAttribute(\"RequiredKey\")\nprint(\"Locked: \" .. tostring(isLocked))  -- Locked: true\nprint(\"Key: \" .. keyNeeded)              -- Key: GoldKey\n\n-- Listen for attribute changes\npart:GetAttributeChangedSignal(\"IsLocked\"):Connect(function()\n    local locked = part:GetAttribute(\"IsLocked\")\n    if locked then\n        part.BrickColor = BrickColor.new(\"Bright red\")\n    else\n        part.BrickColor = BrickColor.new(\"Bright green\")\n    end\nend)\n\n-- WHY USE ATTRIBUTES?\n-- • Set values in Studio Properties panel (no code needed!)\n-- • Easy for non-programmers to configure\n-- • Don't need Value objects (IntValue, StringValue)\n-- • Can be used on ANY instance"
              },
              {
                type: "tip",
                content: "Attributes are great for game designers! Instead of hardcoding values in scripts, set them as attributes on objects. Then anyone can adjust values in Studio's Properties panel without touching code. Set a 'CoinValue' attribute on each coin to control how much it's worth."
              },
              {
                type: "heading",
                level: 2,
                content: "Creating Objects with Code — Instance.new()"
              },
              {
                type: "text",
                content: "Sometimes you need to create objects at runtime rather than placing them in Studio. Instance.new() lets you create ANY Roblox object from code:"
              },
              {
                type: "code",
                language: "lua",
                filename: "instance_new.lua",
                code: "-- Create a new Part entirely from code\nlocal newPart = Instance.new(\"Part\")\nnewPart.Name = \"CodePart\"\nnewPart.Size = Vector3.new(5, 5, 5)\nnewPart.Position = Vector3.new(0, 10, 0)\nnewPart.BrickColor = BrickColor.new(\"Bright red\")\nnewPart.Material = Enum.Material.Neon\nnewPart.Anchored = true\nnewPart.Parent = workspace  -- MUST set Parent to add it to the game!\n\n-- Create a PointLight inside the part\nlocal light = Instance.new(\"PointLight\")\nlight.Brightness = 2\nlight.Range = 15\nlight.Color = Color3.fromRGB(255, 100, 100)\nlight.Parent = newPart  -- Put light inside the part\n\n-- Create a whole trail of parts\nfor i = 1, 20 do\n    local trail = Instance.new(\"Part\")\n    trail.Name = \"TrailPart_\" .. i\n    trail.Size = Vector3.new(2, 2, 2)\n    trail.Position = Vector3.new(i * 4, 5, 0)\n    trail.Anchored = true\n    trail.BrickColor = BrickColor.Random()\n    trail.Material = Enum.Material.SmoothPlastic\n    trail.Parent = workspace\nend\nprint(\"Created 20 trail parts!\")"
              },
              {
                type: "warning",
                content: "Always set the Parent property LAST when using Instance.new()! Setting Parent first then changing properties causes unnecessary updates and can impact performance. Set all properties, THEN set Parent to add the object to the game."
              },
              {
                type: "heading",
                level: 2,
                content: "Cloning vs Creating — When to Use Each"
              },
              {
                type: "code",
                language: "lua",
                filename: "clone_vs_create.lua",
                code: "-- CLONE: Copy an existing object (preserves all properties + children)\nlocal template = game.ServerStorage:WaitForChild(\"CoinTemplate\")\n\nlocal function spawnCoin(position)\n    local coin = template:Clone()  -- Makes an exact copy\n    coin.Position = position\n    coin.Parent = workspace\n    return coin\nend\n\n-- Spawn 5 coins at random positions\nfor i = 1, 5 do\n    local pos = Vector3.new(\n        math.random(-50, 50),\n        5,\n        math.random(-50, 50)\n    )\n    spawnCoin(pos)\nend\n\n-- WHEN TO USE EACH:\n-- Instance.new() → Simple objects (Parts, Values, Lights)\n-- Clone()        → Complex objects (Models with scripts,\n--                   pre-configured parts with children)\n--\n-- Clone is faster for complex objects because it copies\n-- everything at once instead of building piece by piece"
              },
              {
                type: "heading",
                level: 2,
                content: "Destroying Objects"
              },
              {
                type: "code",
                language: "lua",
                filename: "destroying_objects.lua",
                code: "-- Destroy() removes an object permanently\nlocal part = workspace:FindFirstChild(\"OldPart\")\nif part then\n    part:Destroy()  -- Gone forever! Cannot be recovered\nend\n\n-- Common pattern: destroy after a delay\nlocal effect = Instance.new(\"Part\")\neffect.Parent = workspace\n-- ... use the effect ...\ngame:GetService(\"Debris\"):AddItem(effect, 5)  -- Auto-destroy in 5 seconds\n\n-- Debris service is great for cleanup!\n-- It prevents memory leaks from forgotten temporary objects\nlocal Debris = game:GetService(\"Debris\")\n\nlocal function createExplosionEffect(position)\n    local parts = {}\n    for i = 1, 10 do\n        local p = Instance.new(\"Part\")\n        p.Size = Vector3.new(1, 1, 1)\n        p.Position = position + Vector3.new(\n            math.random(-3, 3), math.random(1, 5), math.random(-3, 3)\n        )\n        p.BrickColor = BrickColor.Random()\n        p.Parent = workspace\n        Debris:AddItem(p, 3)  -- Each piece auto-destroys in 3 seconds\n    end\nend"
              },
              {
                type: "quiz",
                question: "What does FindFirstChild return if the object doesn't exist?",
                options: [
                  { id: "a", text: "An error" },
                  { id: "b", text: "false" },
                  { id: "c", text: "nil" },
                  { id: "d", text: "0" }
                ],
                correct: "c",
                explanation: "FindFirstChild returns nil if the object isn't found. This is why you should always check 'if object then' before using it, to avoid 'attempt to index nil' errors!"
              }
            ]
          }
        },
        {
          id: "3-2",
          title: "Events — Reacting to the Game World",
          completed: false,
          content: {
            description: "React to everything that happens in your game! Touch events, click events, player events, and the essential debounce pattern.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll connect code to game events, handle touch/click interactions, manage player joins/leaves, and implement the critical debounce pattern.

**Events** are signals that fire when something happens in your game. A player touches a part? The Touched event fires. A player joins? PlayerAdded fires. A button is clicked? MouseButton1Click fires. Your job is to **connect** a function to these events so your code runs in response.

Events are what make games interactive. Without events, your game would just sit there doing nothing until a script tells it otherwise. With events, your game responds to everything the player does.`
              },
              {
                type: "heading",
                level: 2,
                content: "Connecting to Events"
              },
              {
                type: "code",
                language: "lua",
                filename: "events_basics.lua",
                code: "local part = script.Parent\n\n-- Connect a function to the Touched event\npart.Touched:Connect(function(hitPart)\n    print(\"Something touched the part!\")\n    print(\"It was: \" .. hitPart.Name)\nend)\n\n-- Anatomy:\n-- part.Touched         → the event we're listening to\n-- :Connect()           → connects our function to the event\n-- function(hitPart)    → our code to run (hitPart = what touched it)\n-- end)                 → end of the function\n\n-- You can also use a named function:\nlocal function onTouched(hitPart)\n    print(hitPart.Name .. \" touched the part!\")\nend\n\npart.Touched:Connect(onTouched)  -- Same result!"
              },
              {
                type: "heading",
                level: 2,
                content: "Common Events Reference"
              },
              {
                type: "code",
                language: "lua",
                filename: "common_events.lua",
                code: "-- PART EVENTS\npart.Touched:Connect(function(hit) end)       -- Something touched the part\npart.TouchEnded:Connect(function(hit) end)    -- Something stopped touching\n\n-- PLAYER EVENTS (put in ServerScriptService!)\nlocal Players = game:GetService(\"Players\")\nPlayers.PlayerAdded:Connect(function(player) end)     -- Player joined\nPlayers.PlayerRemoving:Connect(function(player) end)  -- Player leaving\n\n-- CHARACTER EVENTS\nplayer.CharacterAdded:Connect(function(char) end)     -- Character spawned\nhumanoid.Died:Connect(function() end)                 -- Character died\n\n-- CLICK EVENTS (need ClickDetector in the part)\nclickDetector.MouseClick:Connect(function(player) end)\nclickDetector.MouseHoverEnter:Connect(function(player) end)\nclickDetector.MouseHoverLeave:Connect(function(player) end)\n\n-- VALUE EVENTS\nintValue.Changed:Connect(function(newValue) end)  -- Value changed\n\n-- GUI EVENTS\ntextButton.MouseButton1Click:Connect(function() end)  -- Button clicked\ntextButton.MouseEnter:Connect(function() end)         -- Mouse hover\ntextButton.MouseLeave:Connect(function() end)         -- Mouse left"
              },
              {
                type: "heading",
                level: 2,
                content: "Kill Brick — Your First Practical Event"
              },
              {
                type: "code",
                language: "lua",
                filename: "kill_brick.lua",
                code: "local killPart = script.Parent\n\nkillPart.Touched:Connect(function(hit)\n    -- 'hit' is the part that touched us\n    -- If a player touched it, hit is a body part (like 'LeftFoot')\n    -- The character model is hit.Parent\n    \n    -- Look for a Humanoid in the character model\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    \n    if humanoid then\n        -- Found a humanoid = a player touched it!\n        humanoid.Health = 0  -- Set health to 0 = instant kill\n        print(hit.Parent.Name .. \" was eliminated!\")\n    end\n    \n    -- If no Humanoid found, it was just a regular part\n    -- touching us, so we do nothing\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "The Debounce Pattern (CRITICAL!)"
              },
              {
                type: "text",
                content: "The Touched event fires MANY times per second when a player stands on a part. Without debounce, your code runs hundreds of times when you only want it once:"
              },
              {
                type: "code",
                language: "lua",
                filename: "debounce_pattern.lua",
                code: "local part = script.Parent\nlocal debounce = false  -- Our lock variable\n\npart.Touched:Connect(function(hit)\n    -- If already processing, STOP here\n    if debounce then return end\n    \n    -- Check for player\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if not humanoid then return end\n    \n    -- LOCK IT (prevent re-entry)\n    debounce = true\n    \n    -- === Your actual code here ===\n    print(hit.Parent.Name .. \" touched the part!\")\n    part.BrickColor = BrickColor.Random()\n    -- === End of your code ===\n    \n    -- Wait (cooldown period)\n    wait(1)  -- 1 second cooldown\n    \n    -- UNLOCK (allow new triggers)\n    debounce = false\nend)\n\n-- Without debounce: \"Steve touched the part!\" prints 50+ times\n-- With debounce: prints ONCE, waits 1 second, can trigger again"
              },
              {
                type: "warning",
                content: "Always use debounce with Touched events that should only trigger once! Without it, collecting a coin might add 50 coins, a kill brick might print 'Game Over' 100 times, and a teleporter might send you back and forth endlessly."
              },
              {
                type: "heading",
                level: 2,
                content: "Click Detector — Click to Interact"
              },
              {
                type: "code",
                language: "lua",
                filename: "click_detector.lua",
                code: "-- First, add a ClickDetector to your part:\n-- Select Part → click + → search ClickDetector → add it\n\nlocal part = script.Parent\nlocal clickDetector = part:FindFirstChildOfClass(\"ClickDetector\")\n\n-- Set the click range (how close you need to be)\nclickDetector.MaxActivationDistance = 20  -- studs\n\nlocal clickCount = 0\n\nclickDetector.MouseClick:Connect(function(player)\n    clickCount += 1\n    print(player.Name .. \" clicked! Total clicks: \" .. clickCount)\n    \n    -- Change to random color on each click\n    part.BrickColor = BrickColor.Random()\n    \n    -- Change size based on clicks\n    local newSize = 4 + clickCount\n    part.Size = Vector3.new(newSize, newSize, newSize)\nend)\n\n-- Hover effects\nclickDetector.MouseHoverEnter:Connect(function()\n    part.Material = Enum.Material.Neon  -- Glow when hovering\nend)\n\nclickDetector.MouseHoverLeave:Connect(function()\n    part.Material = Enum.Material.Plastic  -- Back to normal\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Player Events — Join, Leave, Spawn, Die"
              },
              {
                type: "code",
                language: "lua",
                filename: "player_lifecycle.lua",
                code: "-- Put this in ServerScriptService!\nlocal Players = game:GetService(\"Players\")\n\nlocal function onPlayerAdded(player)\n    print(\"✅ \" .. player.Name .. \" joined!\")\n    \n    -- Wait for their character to spawn\n    player.CharacterAdded:Connect(function(character)\n        print(\"🏃 \" .. player.Name .. \"'s character loaded!\")\n        \n        local humanoid = character:WaitForChild(\"Humanoid\")\n        \n        -- Customize the player\n        humanoid.WalkSpeed = 20      -- Faster than default (16)\n        humanoid.JumpPower = 75      -- Higher than default (50)\n        humanoid.MaxHealth = 150\n        humanoid.Health = 150\n        \n        -- Handle death\n        humanoid.Died:Connect(function()\n            print(\"💀 \" .. player.Name .. \" died!\")\n            wait(3)  -- Wait 3 seconds\n            player:LoadCharacter()  -- Respawn!\n        end)\n    end)\nend\n\nlocal function onPlayerRemoving(player)\n    print(\"👋 \" .. player.Name .. \" left the game.\")\n    -- Save their data here!\nend\n\nPlayers.PlayerAdded:Connect(onPlayerAdded)\nPlayers.PlayerRemoving:Connect(onPlayerRemoving)"
              },
              {
                type: "tip",
                content: "The 'hit' parameter in Touched events is the PART that touched, not the player! If a player walks on your part, 'hit' might be 'LeftFoot' or 'RightLeg'. Use hit.Parent to get the character model, then FindFirstChild('Humanoid') to confirm it's a player."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create a part that prints the name of anything that touches it (with debounce).",
                  "**Exercise 2:** Build a color-changing button using ClickDetector that cycles through 5 colors.",
                  "**Exercise 3:** Create a speed boost pad: when a player touches it, their WalkSpeed doubles for 5 seconds.",
                  "**Exercise 4:** Write a player greeting system that prints a welcome message when any player joins.",
                  "**Exercise 5:** Build a 'pressure plate' that changes color when a player stands on it and reverts when they step off."
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Disconnecting Events"
              },
              {
                type: "text",
                content: "Sometimes you need to stop listening to an event. The Connect method returns a connection object you can use to disconnect:"
              },
              {
                type: "code",
                language: "lua",
                filename: "disconnect_events.lua",
                code: "-- Store the connection in a variable\nlocal part = script.Parent\nlocal connection\n\nconnection = part.Touched:Connect(function(hit)\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if not humanoid then return end\n    \n    print(\"First touch! This only fires ONCE.\")\n    \n    -- Disconnect so it never fires again\n    connection:Disconnect()\n    \n    -- The event is now permanently disconnected\n    -- Great for one-time pickups, tutorial triggers, etc.\nend)\n\n-- Pattern: self-disconnecting timer\nlocal RunService = game:GetService(\"RunService\")\nlocal elapsed = 0\n\nlocal timerConnection\ntimerConnection = RunService.Heartbeat:Connect(function(dt)\n    elapsed += dt\n    \n    if elapsed >= 10 then\n        print(\"10 seconds passed! Timer stopped.\")\n        timerConnection:Disconnect()\n    end\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Advanced: Custom Events with BindableEvents"
              },
              {
                type: "code",
                language: "lua",
                filename: "bindable_events.lua",
                code: "-- BindableEvents let you create YOUR OWN events!\n-- Great for communication between scripts on the same side\n-- (server-to-server or client-to-client)\n\n-- Create a BindableEvent in ReplicatedStorage called 'GameOver'\nlocal gameOverEvent = game.ReplicatedStorage:WaitForChild(\"GameOver\")\n\n-- Script A: fires the event when game ends\nlocal function endGame(winnerName, score)\n    print(\"Game ending! Winner: \" .. winnerName)\n    gameOverEvent:Fire(winnerName, score)  -- Send data with the event\nend\n\n-- Script B: listens for the event\ngameOverEvent.Event:Connect(function(winnerName, score)\n    print(\"🏆 \" .. winnerName .. \" won with \" .. score .. \" points!\")\n    -- Show game over screen, play victory music, etc.\nend)\n\n-- Unlike RemoteEvents (client ↔ server),\n-- BindableEvents work on the SAME side only"
              },
              {
                type: "tip",
                content: "Use BindableEvents to keep your code organized! Instead of one massive script that handles everything, split your game into smaller scripts that communicate through events. For example: a CombatScript fires 'EnemyDefeated', and your RewardScript listens for it to give coins."
              },
              {
                type: "checkpoint",
                content: "Create a part with a ClickDetector that changes to a random color when clicked, but only allows clicking once per second using the debounce pattern. Display the total click count using print()."
              }
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: "Building Game Systems",
      lessons: [
        {
          id: "4-1",
          title: "Coin Collection & Leaderboards",
          completed: false,
          content: {
            description: "Build a complete coin collection system with scoring, sound effects, visual feedback, respawning coins, and an automatic leaderboard display.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll have a fully functional coin collection system with leaderstats (automatic Roblox leaderboard), sound effects, and respawning coins.

Coin collection is one of the most fundamental game mechanics. You'll find it in Mario, Sonic, Roblox obbies, and thousands of other games. Building this system teaches you how to combine everything you've learned: parts, events, debounce, finding objects, and functions — all working together as a real game feature.

This is where things get exciting — you're building a REAL game system, not just practicing individual concepts. By the end of this lesson, you'll have a working game loop: players run around, collect coins, see their score increase on the leaderboard, and coins respawn for endless gameplay. This is the foundation of every collection-based game.`
              },
              {
                type: "heading",
                level: 2,
                content: "Step 1: Create the Leaderstats System"
              },
              {
                type: "text",
                content: "Leaderstats is Roblox's built-in leaderboard. Create a folder named exactly 'leaderstats' inside a player, and it automatically shows on the scoreboard!"
              },
              {
                type: "code",
                language: "lua",
                filename: "leaderstats_setup.lua",
                code: "-- PUT THIS SCRIPT IN ServerScriptService!\n-- It runs once for each player who joins\n\nlocal Players = game:GetService(\"Players\")\n\nPlayers.PlayerAdded:Connect(function(player)\n    -- Create the leaderstats folder\n    -- MUST be named exactly \"leaderstats\" (lowercase!)\n    local leaderstats = Instance.new(\"Folder\")\n    leaderstats.Name = \"leaderstats\"\n    leaderstats.Parent = player\n    \n    -- Create a Coins counter\n    local coins = Instance.new(\"IntValue\")\n    coins.Name = \"Coins\"\n    coins.Value = 0\n    coins.Parent = leaderstats\n    \n    -- Create a Stage counter (for obbies)\n    local stage = Instance.new(\"IntValue\")\n    stage.Name = \"Stage\"\n    stage.Value = 1\n    stage.Parent = leaderstats\n    \n    print(player.Name .. \"'s stats initialized!\")\nend)\n\n-- The leaderboard automatically appears in the top-right!\n-- Players see everyone's Coins and Stage values"
              },
              {
                type: "warning",
                content: "The folder MUST be named exactly 'leaderstats' (all lowercase, no spaces). This is a Roblox convention — if you spell it differently (like 'LeaderStats' or 'leader_stats'), the scoreboard won't appear!"
              },
              {
                type: "heading",
                level: 2,
                content: "Step 2: Build the Coin Model"
              },
              {
                type: "code",
                language: "text",
                filename: "coin_model.txt",
                code: "Creating an attractive coin:\n\n1. Create a Cylinder part\n2. Size: 2, 0.4, 2 (flat disc shape)\n3. Rotate: 90° on the Z axis (stand it up like a coin)\n4. Color: Bright yellow\n5. Material: Neon (glowing!) or SmoothPlastic\n6. Anchored: YES ✅\n7. CanCollide: NO ❌ (so players walk through it)\n8. Name it: 'Coin'\n\nOptional enhancements:\n• Add a PointLight inside (Range 8, Brightness 1)\n• Add a Sound inside (find a coin sound on Toolbox)\n  Name the sound: 'CollectSound'\n• Make multiple coins by duplicating (Ctrl+D)\n• Put all coins in a Folder called 'Coins'"
              },
              {
                type: "heading",
                level: 2,
                content: "Step 3: The Coin Collection Script"
              },
              {
                type: "code",
                language: "lua",
                filename: "coin_collect.lua",
                code: "-- Put this Script INSIDE each Coin part\n\nlocal coin = script.Parent\nlocal debounce = false\n\n-- Coin spinning animation (optional but looks great!)\nlocal spinSpeed = 2  -- rotations per second\nspawn(function()  -- Run in parallel so it doesn't block\n    while coin do\n        coin.CFrame = coin.CFrame * CFrame.Angles(0, math.rad(spinSpeed * 3), 0)\n        wait(0.01)\n    end\nend)\n\n-- Collection logic\ncoin.Touched:Connect(function(hit)\n    if debounce then return end\n    \n    -- Verify a player touched it\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if not humanoid then return end\n    \n    -- Get the player from the character\n    local player = game.Players:GetPlayerFromCharacter(hit.Parent)\n    if not player then return end\n    \n    -- Get their leaderstats\n    local leaderstats = player:FindFirstChild(\"leaderstats\")\n    if not leaderstats then return end\n    \n    debounce = true\n    \n    -- Add a coin!\n    leaderstats.Coins.Value += 1\n    print(player.Name .. \" collected a coin! Total: \" .. leaderstats.Coins.Value)\n    \n    -- Play collection sound\n    local sound = coin:FindFirstChild(\"CollectSound\")\n    if sound then\n        sound:Play()\n    end\n    \n    -- Hide the coin (visual feedback)\n    coin.Transparency = 1\n    coin.CanCollide = false\n    \n    -- Disable the light if present\n    local light = coin:FindFirstChildOfClass(\"PointLight\")\n    if light then light.Enabled = false end\n    \n    -- Respawn after 10 seconds\n    wait(10)\n    \n    -- Show the coin again\n    coin.Transparency = 0\n    if light then light.Enabled = true end\n    \n    debounce = false\nend)"
              },
              {
                type: "tip",
                content: "For games with LOTS of coins, put all coin logic in a single ServerScript in ServerScriptService instead of individual scripts. Loop through all coins in a folder and connect events programmatically — this is more efficient and easier to maintain."
              },
              {
                type: "heading",
                level: 2,
                content: "Advanced: Centralized Coin Manager"
              },
              {
                type: "code",
                language: "lua",
                filename: "coin_manager.lua",
                code: "-- A SINGLE script that manages ALL coins\n-- Put this in ServerScriptService!\n-- Put all coins in a Folder called 'Coins' in Workspace\n\nlocal Players = game:GetService(\"Players\")\nlocal coinsFolder = workspace:WaitForChild(\"Coins\")\nlocal RESPAWN_TIME = 8\n\nlocal function setupCoin(coin)\n    local debounce = false\n    \n    coin.Touched:Connect(function(hit)\n        if debounce then return end\n        \n        local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n        if not humanoid then return end\n        \n        local player = Players:GetPlayerFromCharacter(hit.Parent)\n        if not player then return end\n        \n        local leaderstats = player:FindFirstChild(\"leaderstats\")\n        if not leaderstats then return end\n        \n        debounce = true\n        \n        -- Collect!\n        leaderstats.Coins.Value += 1\n        \n        -- Hide\n        coin.Transparency = 1\n        coin.CanCollide = false\n        \n        -- Respawn\n        wait(RESPAWN_TIME)\n        coin.Transparency = 0\n        debounce = false\n    end)\nend\n\n-- Set up all existing coins\nfor _, coin in ipairs(coinsFolder:GetChildren()) do\n    setupCoin(coin)\nend\n\n-- Handle new coins added later\ncoinsFolder.ChildAdded:Connect(setupCoin)\n\nprint(\"Coin manager loaded! \" .. #coinsFolder:GetChildren() .. \" coins active.\")"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create the basic leaderstats system with Coins. Test that it appears on the leaderboard.",
                  "**Exercise 2:** Place 5 coins around your map with individual collection scripts.",
                  "**Exercise 3:** Upgrade to the centralized coin manager that handles all coins from one script.",
                  "**Exercise 4:** Add different coin values — gold coins worth 5, silver worth 3, bronze worth 1.",
                  "**Exercise 5:** Create a message that prints in the Output when a player reaches 10 coins."
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Multi-Tier Coin System"
              },
              {
                type: "text",
                content: "Professional games don't just have one type of coin. Let's build a multi-tier system with bronze, silver, and gold coins:"
              },
              {
                type: "code",
                language: "lua",
                filename: "multi_tier_coins.lua",
                code: "-- Centralized multi-tier coin manager\n-- Put in ServerScriptService\n\nlocal Players = game:GetService(\"Players\")\n\n-- Coin tier configuration\nlocal COIN_TIERS = {\n    Bronze = {\n        value = 1,\n        color = BrickColor.new(\"Nougat\"),\n        material = Enum.Material.SmoothPlastic,\n        respawnTime = 5,\n        size = Vector3.new(1.5, 0.3, 1.5)\n    },\n    Silver = {\n        value = 5,\n        color = BrickColor.new(\"Medium stone grey\"),\n        material = Enum.Material.Metal,\n        respawnTime = 15,\n        size = Vector3.new(1.8, 0.35, 1.8)\n    },\n    Gold = {\n        value = 25,\n        color = BrickColor.new(\"Bright yellow\"),\n        material = Enum.Material.Neon,\n        respawnTime = 45,\n        size = Vector3.new(2, 0.4, 2)\n    },\n}\n\nlocal function setupCoin(coin)\n    -- Determine tier from coin name (e.g., 'GoldCoin', 'BronzeCoin')\n    local tierName = nil\n    for name, _ in pairs(COIN_TIERS) do\n        if string.find(coin.Name, name) then\n            tierName = name\n            break\n        end\n    end\n    \n    if not tierName then\n        tierName = \"Bronze\"  -- Default to bronze\n    end\n    \n    local tier = COIN_TIERS[tierName]\n    \n    -- Apply visual properties\n    coin.BrickColor = tier.color\n    coin.Material = tier.material\n    coin.Size = tier.size\n    coin.CanCollide = false\n    \n    local debounce = false\n    \n    coin.Touched:Connect(function(hit)\n        if debounce then return end\n        \n        local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n        if not humanoid then return end\n        \n        local player = Players:GetPlayerFromCharacter(hit.Parent)\n        if not player then return end\n        \n        local leaderstats = player:FindFirstChild(\"leaderstats\")\n        if not leaderstats then return end\n        \n        debounce = true\n        \n        -- Check for double coins game pass\n        local multiplier = player:GetAttribute(\"DoubleCoins\") and 2 or 1\n        local earnedCoins = tier.value * multiplier\n        \n        leaderstats.Coins.Value += earnedCoins\n        print(player.Name .. \" collected \" .. tierName .. \" coin (+\" .. earnedCoins .. \")\")\n        \n        -- Hide coin\n        coin.Transparency = 1\n        coin.CanCollide = false\n        \n        -- Respawn based on tier\n        wait(tier.respawnTime)\n        coin.Transparency = 0\n        debounce = false\n    end)\nend\n\n-- Set up all coins in workspace\nfor _, obj in ipairs(workspace:GetDescendants()) do\n    if obj:IsA(\"Part\") and string.find(obj.Name, \"Coin\") then\n        setupCoin(obj)\n    end\nend\n\nprint(\"Multi-tier coin system loaded!\")"
              },
              {
                type: "heading",
                level: 2,
                content: "Daily Reward System"
              },
              {
                type: "code",
                language: "lua",
                filename: "daily_rewards.lua",
                code: "-- Simple daily reward system (add to your data system)\n-- This encourages players to come back every day!\n\nlocal function checkDailyReward(player, savedData)\n    local now = os.time()  -- Current time in seconds\n    local lastLogin = savedData.LastLoginTime or 0\n    local dayStreak = savedData.LoginStreak or 0\n    \n    local ONE_DAY = 86400    -- 24 hours in seconds\n    local TWO_DAYS = 172800  -- 48 hours in seconds\n    local timeSinceLogin = now - lastLogin\n    \n    if timeSinceLogin >= ONE_DAY and timeSinceLogin < TWO_DAYS then\n        -- Logged in within 24-48 hours: increase streak!\n        dayStreak += 1\n        print(\"🔥 \" .. player.Name .. \" — Day \" .. dayStreak .. \" streak!\")\n    elseif timeSinceLogin >= TWO_DAYS then\n        -- Missed a day: reset streak\n        dayStreak = 1\n        print(\"📅 \" .. player.Name .. \" — Streak reset. Day 1!\")\n    else\n        -- Already logged in today\n        print(\"👋 \" .. player.Name .. \" — Welcome back!\")\n        return savedData  -- No reward for same-day login\n    end\n    \n    -- Calculate reward based on streak\n    local DAILY_REWARDS = {\n        [1] = 10,   -- Day 1: 10 coins\n        [2] = 15,   -- Day 2: 15 coins\n        [3] = 25,   -- Day 3: 25 coins\n        [4] = 35,   -- Day 4: 35 coins\n        [5] = 50,   -- Day 5: 50 coins\n        [6] = 75,   -- Day 6: 75 coins\n        [7] = 150,  -- Day 7: 150 coins (weekly bonus!)\n    }\n    \n    local dayIndex = math.min(dayStreak, 7)  -- Cap at day 7 rewards\n    local reward = DAILY_REWARDS[dayIndex]\n    \n    player.leaderstats.Coins.Value += reward\n    print(\"🎁 Daily reward: +\" .. reward .. \" coins!\")\n    \n    savedData.LastLoginTime = now\n    savedData.LoginStreak = dayStreak\n    return savedData\nend"
              },
              {
                type: "tip",
                content: "Daily reward systems are the #1 retention mechanic in free-to-play games. They give players a reason to come back every single day. The escalating rewards and streak bonus create a powerful 'don't want to lose my streak' motivation."
              },
              {
                type: "checkpoint",
                content: "Build the complete coin system: leaderstats in ServerScriptService, 5+ coins around your map with collection scripts, sound effects, and respawning. Test that the score increases on the leaderboard!"
              }
            ]
          }
        },
        {
          id: "4-2",
          title: "Checkpoints, Kill Bricks & Traps",
          completed: false,
          content: {
            description: "Build an obby (obstacle course) with a checkpoint system, deadly traps, moving platforms, and polished gameplay feel.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll have a working obby with checkpoints that save progress, kill bricks, lava zones, moving traps, and spinning blades.

Obbies (obstacle courses) are one of the most popular Roblox game genres — and for good reason. They combine level design, scripting, and game feel into a satisfying experience. The core loop is simple: jump, avoid hazards, reach checkpoints. But making it FEEL good requires understanding all the systems underneath.

Games like Tower of Hell, Mega Easy Obby, and Escape Room have millions of visits because they nail the checkpoint-and-hazard formula. In this lesson, you'll learn to build every component of a professional obby, from the checkpoint save system to varied and interesting traps that keep players engaged.`
              },
              {
                type: "heading",
                level: 2,
                content: "Checkpoint System"
              },
              {
                type: "code",
                language: "lua",
                filename: "checkpoint_system.lua",
                code: "-- PUT IN ServerScriptService!\n-- Create a Folder called 'Checkpoints' in Workspace\n-- Name checkpoints: Checkpoint1, Checkpoint2, etc.\n\nlocal Players = game:GetService(\"Players\")\nlocal checkpoints = workspace:WaitForChild(\"Checkpoints\")\n\n-- Set up leaderstats with Stage\nPlayers.PlayerAdded:Connect(function(player)\n    local leaderstats = Instance.new(\"Folder\")\n    leaderstats.Name = \"leaderstats\"\n    leaderstats.Parent = player\n    \n    local stage = Instance.new(\"IntValue\")\n    stage.Name = \"Stage\"\n    stage.Value = 1\n    stage.Parent = leaderstats\n    \n    -- Spawn player at their current checkpoint\n    player.CharacterAdded:Connect(function(character)\n        wait()  -- Let character fully load\n        \n        local checkpoint = checkpoints:FindFirstChild(\n            \"Checkpoint\" .. stage.Value\n        )\n        \n        if checkpoint then\n            local hrp = character:WaitForChild(\"HumanoidRootPart\")\n            hrp.CFrame = checkpoint.CFrame + Vector3.new(0, 5, 0)\n        end\n    end)\nend)\n\n-- Set up checkpoint touch detection\nfor _, checkpoint in ipairs(checkpoints:GetChildren()) do\n    -- Extract the number from the name (e.g., \"Checkpoint3\" → 3)\n    local num = tonumber(checkpoint.Name:match(\"%d+\"))\n    if not num then continue end\n    \n    checkpoint.Touched:Connect(function(hit)\n        local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n        if not humanoid then return end\n        \n        local player = Players:GetPlayerFromCharacter(hit.Parent)\n        if not player then return end\n        \n        local stage = player.leaderstats.Stage\n        \n        -- Only update if this is a NEW checkpoint (not going backwards)\n        if num > stage.Value then\n            stage.Value = num\n            print(player.Name .. \" reached Stage \" .. num .. \"!\")\n            \n            -- Visual feedback: change checkpoint color\n            checkpoint.BrickColor = BrickColor.new(\"Lime green\")\n        end\n    end)\nend\n\nprint(\"Checkpoint system loaded! \" .. #checkpoints:GetChildren() .. \" checkpoints.\")"
              },
              {
                type: "heading",
                level: 2,
                content: "Kill Bricks — Various Types"
              },
              {
                type: "code",
                language: "lua",
                filename: "kill_bricks.lua",
                code: "-- === INSTANT KILL BRICK ===\n-- Put inside a red part\nlocal killPart = script.Parent\n\nkillPart.Touched:Connect(function(hit)\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if humanoid then\n        humanoid.Health = 0\n    end\nend)\n\n\n-- === DAMAGE-OVER-TIME LAVA ===\n-- Put inside an orange/red Neon part\nlocal lava = script.Parent\nlocal DAMAGE_PER_SECOND = 30\nlocal touchingHumanoids = {}\n\nlava.Touched:Connect(function(hit)\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if humanoid and not touchingHumanoids[humanoid] then\n        touchingHumanoids[humanoid] = true\n        \n        while touchingHumanoids[humanoid] and humanoid.Health > 0 do\n            humanoid:TakeDamage(DAMAGE_PER_SECOND)\n            wait(1)\n        end\n    end\nend)\n\nlava.TouchEnded:Connect(function(hit)\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if humanoid then\n        touchingHumanoids[humanoid] = nil\n    end\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Moving Traps with TweenService"
              },
              {
                type: "code",
                language: "lua",
                filename: "moving_trap.lua",
                code: "-- Smooth moving kill brick using TweenService\nlocal TweenService = game:GetService(\"TweenService\")\nlocal trap = script.Parent\nlocal startPos = trap.Position\nlocal endPos = startPos + Vector3.new(20, 0, 0)  -- Move 20 studs right\nlocal SPEED = 2  -- seconds per trip\n\n-- Kill on touch\ntrap.Touched:Connect(function(hit)\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if humanoid then\n        humanoid.Health = 0\n    end\nend)\n\n-- Smooth back-and-forth movement\nlocal tweenInfo = TweenInfo.new(\n    SPEED,                        -- Time\n    Enum.EasingStyle.Sine,        -- Smooth movement\n    Enum.EasingDirection.InOut,   -- Ease in and out\n    -1,                           -- Repeat forever (-1 = infinite)\n    true                          -- Reverse (go back and forth)\n)\n\nlocal tween = TweenService:Create(trap, tweenInfo, {\n    Position = endPos\n})\ntween:Play()"
              },
              {
                type: "heading",
                level: 2,
                content: "Spinning Blade Trap"
              },
              {
                type: "code",
                language: "lua",
                filename: "spinning_blade.lua",
                code: "local blade = script.Parent\nlocal SPIN_SPEED = 3  -- Degrees per frame\n\n-- Kill on touch\nblade.Touched:Connect(function(hit)\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if humanoid then\n        humanoid.Health = 0\n    end\nend)\n\n-- Spin continuously\nwhile true do\n    blade.CFrame = blade.CFrame * CFrame.Angles(0, math.rad(SPIN_SPEED), 0)\n    wait()  -- Wait one frame for smooth rotation\nend"
              },
              {
                type: "tip",
                content: "Use TweenService for smooth platform movement! It's better than manually changing Position each frame because it handles interpolation, easing curves, and physics properly. TweenService is what professional Roblox developers use."
              },
              {
                type: "heading",
                level: 2,
                content: "Falling Block Trap"
              },
              {
                type: "text",
                content: "Blocks that fall from the ceiling are a classic trap mechanic:"
              },
              {
                type: "code",
                language: "lua",
                filename: "falling_blocks.lua",
                code: "-- Falling blocks that respawn in the ceiling\n-- Put this in ServerScriptService\n\nlocal Debris = game:GetService(\"Debris\")\n\nlocal function createFallingBlock(spawnPosition)\n    local block = Instance.new(\"Part\")\n    block.Size = Vector3.new(\n        math.random(3, 6),\n        math.random(3, 6),\n        math.random(3, 6)\n    )\n    block.Position = spawnPosition + Vector3.new(\n        math.random(-10, 10), 0, math.random(-10, 10)\n    )\n    block.BrickColor = BrickColor.new(\"Dark stone grey\")\n    block.Material = Enum.Material.Slate\n    block.Anchored = false  -- Falls with gravity!\n    block.Parent = workspace\n    \n    -- Kill on impact\n    block.Touched:Connect(function(hit)\n        local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n        if humanoid then\n            humanoid:TakeDamage(40)\n        end\n    end)\n    \n    -- Auto-cleanup after 8 seconds\n    Debris:AddItem(block, 8)\nend\n\n-- Spawn falling blocks periodically in a danger zone\nlocal dangerZone = workspace:WaitForChild(\"DangerZone\")  -- A part marking the area\nlocal spawnHeight = dangerZone.Position + Vector3.new(0, 40, 0)\n\nwhile true do\n    createFallingBlock(spawnHeight)\n    wait(math.random(1, 3))  -- Random interval between blocks\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Laser Grid Trap"
              },
              {
                type: "code",
                language: "lua",
                filename: "laser_grid.lua",
                code: "-- Toggling laser beams — must time your movement!\n-- Create thin Neon parts as 'lasers'\n\nlocal laserFolder = workspace:WaitForChild(\"Lasers\")\nlocal TOGGLE_TIME = 2  -- seconds between on/off\nlocal isActive = true\n\n-- Kill on touch when active\nfor _, laser in ipairs(laserFolder:GetChildren()) do\n    laser.Touched:Connect(function(hit)\n        if not isActive then return end\n        local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n        if humanoid then\n            humanoid.Health = 0\n        end\n    end)\nend\n\n-- Toggle lasers on and off\nwhile true do\n    wait(TOGGLE_TIME)\n    isActive = not isActive\n    \n    for _, laser in ipairs(laserFolder:GetChildren()) do\n        if isActive then\n            laser.Transparency = 0\n            laser.CanCollide = true\n            laser.BrickColor = BrickColor.new(\"Really red\")\n        else\n            laser.Transparency = 0.8\n            laser.CanCollide = false\n            laser.BrickColor = BrickColor.new(\"Dark stone grey\")\n        end\n    end\nend"
              },
              {
                type: "warning",
                content: "When building trap-heavy sections, always give players a visual warning before the trap activates. A red flash, a sound cue, or a brief animation tells the player 'danger is coming' and gives them a chance to react. Traps without warning feel unfair; traps with warning feel challenging."
              },
              {
                type: "heading",
                level: 2,
                content: "Disappearing Platforms"
              },
              {
                type: "code",
                language: "lua",
                filename: "disappearing_platform.lua",
                code: "-- Platform that disappears shortly after being touched!\nlocal platform = script.Parent\nlocal VISIBLE_TIME = 1.5    -- Seconds before disappearing\nlocal RESPAWN_TIME = 3      -- Seconds before reappearing\nlocal debounce = false\n\nplatform.Touched:Connect(function(hit)\n    if debounce then return end\n    \n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if not humanoid then return end\n    \n    debounce = true\n    \n    -- Visual warning — turn red!\n    platform.BrickColor = BrickColor.new(\"Bright red\")\n    \n    -- Wait before disappearing\n    wait(VISIBLE_TIME)\n    \n    -- Disappear!\n    platform.Transparency = 1\n    platform.CanCollide = false\n    \n    -- Wait to respawn\n    wait(RESPAWN_TIME)\n    \n    -- Reappear!\n    platform.Transparency = 0\n    platform.CanCollide = true\n    platform.BrickColor = BrickColor.new(\"Medium stone grey\")\n    \n    debounce = false\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Build a 3-checkpoint obby with the checkpoint system. Test that respawning works at the correct checkpoint.",
                  "**Exercise 2:** Create 3 types of hazards: instant kill brick, lava zone, and a moving trap.",
                  "**Exercise 3:** Add disappearing platforms to your obby — they vanish 1.5 seconds after being touched.",
                  "**Exercise 4:** Create a spinning blade obstacle using CFrame.Angles().",
                  "**Exercise 5:** Combine everything: build a complete obby stage with platforms, hazards, and a checkpoint at the end."
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Conveyor Belt Trap"
              },
              {
                type: "text",
                content: "Conveyor belts push players toward hazards. They're a staple of difficult obbies:"
              },
              {
                type: "code",
                language: "lua",
                filename: "conveyor_belt.lua",
                code: "-- Conveyor belt that pushes players in a direction\nlocal conveyor = script.Parent\nlocal PUSH_SPEED = 15  -- How fast it pushes\nlocal DIRECTION = Vector3.new(1, 0, 0)  -- Push to the right (+X)\n\n-- Set the visual velocity (the surface arrows)\nconveyor.AssemblyLinearVelocity = DIRECTION * PUSH_SPEED\n\n-- Alternative: Use BodyVelocity on touching players\nconveyor.Touched:Connect(function(hit)\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if not humanoid then return end\n    \n    local rootPart = hit.Parent:FindFirstChild(\"HumanoidRootPart\")\n    if not rootPart then return end\n    \n    -- Check if already has a conveyor force\n    if rootPart:FindFirstChild(\"ConveyorForce\") then return end\n    \n    local force = Instance.new(\"BodyVelocity\")\n    force.Name = \"ConveyorForce\"\n    force.Velocity = DIRECTION * PUSH_SPEED\n    force.MaxForce = Vector3.new(5000, 0, 5000)\n    force.Parent = rootPart\nend)\n\nconveyor.TouchEnded:Connect(function(hit)\n    local rootPart = hit.Parent and hit.Parent:FindFirstChild(\"HumanoidRootPart\")\n    if rootPart then\n        local force = rootPart:FindFirstChild(\"ConveyorForce\")\n        if force then force:Destroy() end\n    end\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Timed Challenge Doors"
              },
              {
                type: "code",
                language: "lua",
                filename: "timed_door.lua",
                code: "-- A door that opens briefly then closes — players must be fast!\nlocal TweenService = game:GetService(\"TweenService\")\nlocal door = script.Parent\nlocal button = workspace:WaitForChild(\"DoorButton\")  -- A separate part\n\nlocal OPEN_TIME = 3      -- Seconds the door stays open\nlocal isOpen = false\nlocal openPosition = door.Position + Vector3.new(0, 12, 0)  -- Move up\nlocal closedPosition = door.Position\n\nlocal function openDoor()\n    if isOpen then return end\n    isOpen = true\n    \n    -- Smooth open animation\n    local openTween = TweenService:Create(door, TweenInfo.new(0.5), {\n        Position = openPosition\n    })\n    openTween:Play()\n    openTween.Completed:Wait()\n    \n    -- Wait then close\n    wait(OPEN_TIME)\n    \n    -- Smooth close animation\n    local closeTween = TweenService:Create(door, TweenInfo.new(0.5), {\n        Position = closedPosition\n    })\n    closeTween:Play()\n    closeTween.Completed:Wait()\n    \n    isOpen = false\nend\n\n-- Open door when button is touched\nlocal clickDetector = button:FindFirstChildOfClass(\"ClickDetector\")\nif clickDetector then\n    clickDetector.MouseClick:Connect(openDoor)\nend"
              },
              {
                type: "tip",
                content: "Great obby design follows a difficulty curve: start easy to teach players the mechanics, then gradually increase difficulty. Place checkpoints AFTER hard sections (not before!) so players feel rewarded for completing challenges."
              },
              {
                type: "quiz",
                question: "Why do we check if stage.Value < checkpointNumber before updating?",
                options: [
                  { id: "a", text: "To make the game harder" },
                  { id: "b", text: "To prevent going backwards to earlier checkpoints" },
                  { id: "c", text: "To count total checkpoints" },
                  { id: "d", text: "No reason, it's optional" }
                ],
                correct: "b",
                explanation: "We only update the stage if the new checkpoint number is HIGHER than the current one. This prevents players from losing progress by accidentally touching earlier checkpoints while exploring!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 5,
      title: "User Interface (GUI)",
      lessons: [
        {
          id: "5-1",
          title: "Creating Game UI",
          completed: false,
          content: {
            description: "Build professional user interfaces — health bars, score displays, menus, and HUD elements that make your game feel polished.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll create screen GUIs with frames, labels, and proper positioning using the UDim2 system.

**GUIs** (Graphical User Interfaces) are the 2D elements overlaid on the player's screen — health bars, coin counters, menus, buttons, and notifications. A game without a good UI feels unfinished. GUIs are what transform a prototype into a polished game.

In Roblox, GUIs live in StarterGui and are cloned to each player when they join. They use LocalScripts because they run on each player's individual screen.`
              },
              {
                type: "heading",
                level: 2,
                content: "GUI Hierarchy"
              },
              {
                type: "code",
                language: "text",
                filename: "gui_hierarchy.txt",
                code: "StarterGui                    ← GUIs start here, cloned to each player\n└── ScreenGui                 ← A screen-space container (invisible)\n    ├── Frame                 ← A visible rectangle (container)\n    │   ├── TextLabel         ← Displays text (non-interactive)\n    │   ├── TextButton        ← Clickable text button\n    │   ├── ImageLabel        ← Displays an image\n    │   └── ImageButton       ← Clickable image button\n    ├── TextBox               ← Text input field\n    └── Frame (another one)   ← Multiple frames for layout\n        ├── UIListLayout       ← Auto-arranges children\n        └── TextLabel"
              },
              {
                type: "heading",
                level: 2,
                content: "The UDim2 Positioning System"
              },
              {
                type: "text",
                content: "Understanding UDim2 is essential for GUI work. It uses two values per axis: Scale (percentage of parent) and Offset (exact pixels):"
              },
              {
                type: "code",
                language: "text",
                filename: "udim2_explained.txt",
                code: "UDim2.new(ScaleX, OffsetX, ScaleY, OffsetY)\n\nScale = 0 to 1 (percentage of parent size)\n  0   = left/top edge\n  0.5 = center\n  1   = right/bottom edge\n\nOffset = exact pixels (added to scale position)\n  Use for precise pixel-perfect positioning\n\nCommon Positions:\n──────────────────\nTop-Left:     UDim2.new(0, 10, 0, 10)         → 10px from corner\nTop-Center:   UDim2.new(0.5, 0, 0, 10)        → centered top\nCenter:       UDim2.new(0.5, 0, 0.5, 0)       → dead center*\nBottom-Right: UDim2.new(1, -10, 1, -10)        → 10px from corner\n\n* For true center, also set AnchorPoint = (0.5, 0.5)\n  AnchorPoint moves the pivot point of the element\n\nCommon Sizes:\n──────────────────\nFull screen:    UDim2.new(1, 0, 1, 0)\nHalf width:     UDim2.new(0.5, 0, 0, 50)     → 50% wide, 50px tall\nFixed size:     UDim2.new(0, 200, 0, 50)      → exactly 200x50 pixels"
              },
              {
                type: "heading",
                level: 2,
                content: "Building a Score HUD"
              },
              {
                type: "code",
                language: "lua",
                filename: "score_hud.lua",
                code: "-- LocalScript inside a TextLabel in StarterGui\n-- GUI Setup in Studio:\n-- StarterGui → ScreenGui → Frame → TextLabel → this LocalScript\n\nlocal player = game.Players.LocalPlayer\nlocal label = script.Parent\n\n-- Style the label via code (or do it in Properties)\nlabel.Size = UDim2.new(0, 200, 0, 50)\nlabel.Position = UDim2.new(0, 10, 0, 10)  -- top-left, 10px margin\nlabel.BackgroundColor3 = Color3.fromRGB(0, 0, 0)  -- black background\nlabel.BackgroundTransparency = 0.5  -- semi-transparent\nlabel.TextColor3 = Color3.fromRGB(255, 255, 255)  -- white text\nlabel.TextSize = 24\nlabel.Font = Enum.Font.GothamBold\n\n-- Wait for leaderstats to load\nlocal leaderstats = player:WaitForChild(\"leaderstats\")\nlocal coins = leaderstats:WaitForChild(\"Coins\")\n\n-- Update the display\nlocal function updateDisplay()\n    label.Text = \"💰 Coins: \" .. coins.Value\nend\n\n-- Update when coins change\ncoins.Changed:Connect(updateDisplay)\n\n-- Initial update\nupdateDisplay()"
              },
              {
                type: "heading",
                level: 2,
                content: "Building a Health Bar"
              },
              {
                type: "code",
                language: "lua",
                filename: "health_bar.lua",
                code: "-- LocalScript for a health bar GUI\n-- Structure: ScreenGui → HealthFrame (background) → HealthFill (inner bar)\n\nlocal player = game.Players.LocalPlayer\nlocal background = script.Parent  -- The background frame\nlocal fill = background:WaitForChild(\"HealthFill\")  -- The colored bar inside\n\n-- Style\nbackground.Size = UDim2.new(0, 200, 0, 30)\nbackground.Position = UDim2.new(0.5, -100, 1, -50)  -- bottom center\nbackground.BackgroundColor3 = Color3.fromRGB(50, 50, 50)  -- dark gray\n\nfill.Size = UDim2.new(1, 0, 1, 0)  -- fills the background\nfill.BackgroundColor3 = Color3.fromRGB(0, 255, 0)  -- green\n\nlocal function updateHealthBar()\n    local character = player.Character\n    if not character then return end\n    \n    local humanoid = character:FindFirstChildOfClass(\"Humanoid\")\n    if not humanoid then return end\n    \n    local healthPercent = humanoid.Health / humanoid.MaxHealth\n    \n    -- Resize the fill bar\n    fill.Size = UDim2.new(healthPercent, 0, 1, 0)\n    \n    -- Change color based on health\n    if healthPercent > 0.6 then\n        fill.BackgroundColor3 = Color3.fromRGB(0, 255, 0)    -- Green\n    elseif healthPercent > 0.3 then\n        fill.BackgroundColor3 = Color3.fromRGB(255, 255, 0)  -- Yellow\n    else\n        fill.BackgroundColor3 = Color3.fromRGB(255, 0, 0)    -- Red\n    end\nend\n\n-- Connect to character and humanoid health changes\nplayer.CharacterAdded:Connect(function(character)\n    local humanoid = character:WaitForChild(\"Humanoid\")\n    humanoid.HealthChanged:Connect(updateHealthBar)\n    updateHealthBar()\nend)\n\nif player.Character then updateHealthBar() end"
              },
              {
                type: "tip",
                content: "GUIs use LocalScripts, not Scripts! LocalScripts run on the player's device, which is where GUI rendering happens. Put LocalScripts inside the GUI elements they control."
              },
              {
                type: "heading",
                level: 2,
                content: "Styling Tips — Making GUIs Look Professional"
              },
              {
                type: "code",
                language: "lua",
                filename: "gui_styling.lua",
                code: "-- Professional GUI styling techniques\n\nlocal frame = script.Parent\n\n-- 1. ROUNDED CORNERS (essential for modern look)\nlocal corner = Instance.new(\"UICorner\")\ncorner.CornerRadius = UDim.new(0, 8)  -- 8px radius\ncorner.Parent = frame\n\n-- 2. STROKE (border/outline)\nlocal stroke = Instance.new(\"UIStroke\")\nstroke.Color = Color3.fromRGB(100, 100, 200)\nstroke.Thickness = 2\nstroke.Transparency = 0.5\nstroke.Parent = frame\n\n-- 3. GRADIENT (fade between colors)\nlocal gradient = Instance.new(\"UIGradient\")\ngradient.Color = ColorSequence.new(\n    Color3.fromRGB(60, 60, 120),   -- Start color\n    Color3.fromRGB(30, 30, 60)     -- End color\n)\ngradient.Rotation = 90  -- Top to bottom\ngradient.Parent = frame\n\n-- 4. DROP SHADOW (using a duplicate frame behind)\nlocal shadow = Instance.new(\"Frame\")\nshadow.Size = UDim2.new(1, 4, 1, 4)\nshadow.Position = UDim2.new(0, 2, 0, 2)\nshadow.BackgroundColor3 = Color3.fromRGB(0, 0, 0)\nshadow.BackgroundTransparency = 0.6\nshadow.ZIndex = frame.ZIndex - 1\nshadow.Parent = frame.Parent\nlocal shadowCorner = Instance.new(\"UICorner\")\nshadowCorner.CornerRadius = UDim.new(0, 10)\nshadowCorner.Parent = shadow\n\n-- 5. COMMON COLOR PALETTES FOR GAMES:\n-- Dark theme:  BG=#1a1a2e, Accent=#e94560, Text=#eee\n-- Sci-fi:      BG=#0a0a0a, Accent=#00ff88, Text=#ccc\n-- Fantasy:     BG=#2d1b00, Accent=#ffd700, Text=#f5f5dc\n-- Ocean:       BG=#001f3f, Accent=#7fdbff, Text=#fff"
              },
              {
                type: "heading",
                level: 2,
                content: "Responsive Design — Different Screen Sizes"
              },
              {
                type: "code",
                language: "lua",
                filename: "responsive_design.lua",
                code: "-- Make GUIs look good on ALL screen sizes (PC, tablet, phone)\n\nlocal player = game.Players.LocalPlayer\nlocal screenSize = player.PlayerGui:WaitForChild(\"ScreenGui\").AbsoluteSize\n\n-- Check screen width to determine device type\nlocal function getDeviceType()\n    local width = screenSize.X\n    if width < 600 then\n        return \"Phone\"\n    elseif width < 1200 then\n        return \"Tablet\"\n    else\n        return \"PC\"\n    end\nend\n\nlocal device = getDeviceType()\nprint(\"Playing on: \" .. device)\n\n-- Adjust UI based on device\nlocal button = script.Parent\nif device == \"Phone\" then\n    button.Size = UDim2.new(0.8, 0, 0, 60)  -- Wider, taller for thumbs\n    button.TextSize = 22\nelseif device == \"Tablet\" then\n    button.Size = UDim2.new(0.5, 0, 0, 50)\n    button.TextSize = 20\nelse\n    button.Size = UDim2.new(0.3, 0, 0, 40)\n    button.TextSize = 18\nend\n\n-- PRO TIP: Use Scale (0-1) for sizes that should adapt\n-- to screen size, and Offset (pixels) for fixed-size elements.\n-- UDim2.new(0.3, 0, 0.1, 0) → 30% wide, 10% tall (responsive!)\n-- UDim2.new(0, 200, 0, 50) → always 200x50px (fixed)"
              },
              {
                type: "warning",
                content: "Always test your GUI on different screen sizes! In Studio, go to View → Device Emulation to preview how your game looks on phones, tablets, and different monitors. Many developers forget this and their phone players see broken UI."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create a simple ScreenGui with a TextLabel displaying 'Hello, Player!' centered on screen.",
                  "**Exercise 2:** Build the coin counter HUD that updates when the player collects coins.",
                  "**Exercise 3:** Create a health bar using two frames (background + fill).",
                  "**Exercise 4:** Add a Stage display next to the coin counter.",
                  "**Exercise 5:** Style your GUI with custom colors, fonts, rounded corners (UICorner), and a gradient (UIGradient)."
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Creating GUIs Entirely from Code"
              },
              {
                type: "text",
                content: "While you can design GUIs in Studio's GUI editor, creating them from code gives you full control and makes them easier to replicate:"
              },
              {
                type: "code",
                language: "lua",
                filename: "gui_from_code.lua",
                code: "-- LocalScript in StarterPlayerScripts\nlocal player = game.Players.LocalPlayer\nlocal playerGui = player:WaitForChild(\"PlayerGui\")\n\n-- Create the ScreenGui container\nlocal screenGui = Instance.new(\"ScreenGui\")\nscreenGui.Name = \"CustomHUD\"\nscreenGui.ResetOnSpawn = false  -- Don't destroy on death!\nscreenGui.Parent = playerGui\n\n-- Create a notification banner at the top\nlocal banner = Instance.new(\"Frame\")\nbanner.Name = \"NotificationBanner\"\nbanner.Size = UDim2.new(0.4, 0, 0, 40)\nbanner.Position = UDim2.new(0.3, 0, 0, -50)  -- Start off-screen\nbanner.AnchorPoint = Vector2.new(0, 0)\nbanner.BackgroundColor3 = Color3.fromRGB(30, 30, 30)\nbanner.BackgroundTransparency = 0.2\nbanner.BorderSizePixel = 0\nbanner.Parent = screenGui\n\n-- Add rounded corners\nlocal corner = Instance.new(\"UICorner\")\ncorner.CornerRadius = UDim.new(0, 8)\ncorner.Parent = banner\n\n-- Add text to the banner\nlocal bannerText = Instance.new(\"TextLabel\")\nbannerText.Name = \"BannerText\"\nbannerText.Size = UDim2.new(1, -20, 1, 0)\nbannerText.Position = UDim2.new(0, 10, 0, 0)\nbannerText.BackgroundTransparency = 1\nbannerText.TextColor3 = Color3.fromRGB(255, 255, 255)\nbannerText.Font = Enum.Font.GothamBold\nbannerText.TextSize = 16\nbannerText.Text = \"Welcome to the game!\"\nbannerText.Parent = banner\n\nprint(\"Custom HUD created from code!\")"
              },
              {
                type: "heading",
                level: 2,
                content: "UI Layout Constraints"
              },
              {
                type: "text",
                content: "Roblox provides powerful layout objects that automatically arrange children within a frame:"
              },
              {
                type: "code",
                language: "lua",
                filename: "ui_layouts.lua",
                code: "-- UIListLayout: Arrange children in a list (vertical or horizontal)\nlocal frame = script.Parent\n\nlocal listLayout = Instance.new(\"UIListLayout\")\nlistLayout.FillDirection = Enum.FillDirection.Vertical  -- or Horizontal\nlistLayout.Padding = UDim.new(0, 5)       -- 5px between items\nlistLayout.HorizontalAlignment = Enum.HorizontalAlignment.Center\nlistLayout.SortOrder = Enum.SortOrder.LayoutOrder\nlistLayout.Parent = frame\n\n-- Now any children added to the frame will auto-stack!\nfor i = 1, 5 do\n    local item = Instance.new(\"TextLabel\")\n    item.Name = \"Item\" .. i\n    item.Size = UDim2.new(1, 0, 0, 30)\n    item.Text = \"Menu Item \" .. i\n    item.LayoutOrder = i  -- Controls the order\n    item.Parent = frame   -- Automatically positioned!\nend\n\n-- UIGridLayout: Arrange in a grid\nlocal gridLayout = Instance.new(\"UIGridLayout\")\ngridLayout.CellSize = UDim2.new(0, 80, 0, 80)  -- Each cell 80x80\ngridLayout.CellPadding = UDim2.new(0, 5, 0, 5)  -- 5px gaps\ngridLayout.Parent = inventoryFrame\n\n-- UIPadding: Add inner spacing\nlocal padding = Instance.new(\"UIPadding\")\npadding.PaddingTop = UDim.new(0, 10)\npadding.PaddingBottom = UDim.new(0, 10)\npadding.PaddingLeft = UDim.new(0, 10)\npadding.PaddingRight = UDim.new(0, 10)\npadding.Parent = frame"
              },
              {
                type: "tip",
                content: "UIListLayout and UIGridLayout are game-changers for inventory systems, shop menus, and settings panels. Instead of manually positioning each item, the layout handles it automatically — even when you add or remove items dynamically!"
              },
              {
                type: "quiz",
                question: "What does UDim2.new(0.5, 0, 0.5, 0) with AnchorPoint (0.5, 0.5) do?",
                options: [
                  { id: "a", text: "Top-left corner" },
                  { id: "b", text: "Exact center of screen" },
                  { id: "c", text: "Bottom-right corner" },
                  { id: "d", text: "Half size" }
                ],
                correct: "b",
                explanation: "Scale 0.5 = 50% of the way across both axes. With AnchorPoint at (0.5, 0.5), the element's CENTER is placed at that point, resulting in perfect centering!"
              }
            ]
          }
        },
        {
          id: "5-2",
          title: "Interactive Buttons & Menus",
          completed: false,
          content: {
            description: "Create clickable buttons, toggle switches, shop menus, and menu systems with smooth animations.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll build interactive menus with buttons, hover effects, toggle switches, and a functional shop UI.

Buttons are how players interact with your game's UI. Every menu screen, shop interface, settings panel, and dialog box relies on buttons. Making them responsive, visually appealing, and functional is what separates amateur games from professional ones.`
              },
              {
                type: "heading",
                level: 2,
                content: "Button Click Events"
              },
              {
                type: "code",
                language: "lua",
                filename: "button_basics.lua",
                code: "-- LocalScript inside a TextButton\nlocal button = script.Parent\n\n-- Click event\nbutton.MouseButton1Click:Connect(function()\n    print(\"Button clicked!\")\n    button.Text = \"Clicked!\"\nend)\n\n-- Hover effects for visual feedback\nbutton.MouseEnter:Connect(function()\n    button.BackgroundColor3 = Color3.fromRGB(80, 80, 200) -- Lighter\nend)\n\nbutton.MouseLeave:Connect(function()\n    button.BackgroundColor3 = Color3.fromRGB(50, 50, 150) -- Original\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Main Menu System"
              },
              {
                type: "code",
                language: "lua",
                filename: "main_menu.lua",
                code: "-- LocalScript inside the Menu Frame\nlocal TweenService = game:GetService(\"TweenService\")\nlocal menu = script.Parent\nlocal playButton = menu:WaitForChild(\"PlayButton\")\nlocal settingsButton = menu:WaitForChild(\"SettingsButton\")\nlocal settingsPanel = menu:WaitForChild(\"SettingsPanel\")\n\n-- Initially hide settings panel\nsettingsPanel.Visible = false\n\n-- Smooth fade-out function\nlocal function hideMenu()\n    local tween = TweenService:Create(\n        menu,\n        TweenInfo.new(0.5, Enum.EasingStyle.Quad),\n        {BackgroundTransparency = 1}\n    )\n    tween:Play()\n    tween.Completed:Wait()\n    menu.Visible = false\nend\n\n-- Play button: hide menu and start game\nplayButton.MouseButton1Click:Connect(function()\n    playButton.Text = \"Starting...\"\n    hideMenu()\n    -- Optionally tell the server:\n    -- game.ReplicatedStorage.StartGame:FireServer()\nend)\n\n-- Settings button: toggle settings panel\nlocal settingsOpen = false\nsettingsButton.MouseButton1Click:Connect(function()\n    settingsOpen = not settingsOpen\n    settingsPanel.Visible = settingsOpen\n    settingsButton.Text = settingsOpen and \"✕ Close Settings\" or \"⚙ Settings\"\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Shop System UI"
              },
              {
                type: "code",
                language: "lua",
                filename: "shop_ui.lua",
                code: "-- LocalScript for a shop button\nlocal button = script.Parent\nlocal player = game.Players.LocalPlayer\nlocal itemName = \"Speed Boost\"\nlocal itemCost = 50\n\n-- Set button text\nbutton.Text = itemName .. \" — \" .. itemCost .. \" coins\"\n\nbutton.MouseButton1Click:Connect(function()\n    local leaderstats = player:FindFirstChild(\"leaderstats\")\n    if not leaderstats then return end\n    \n    local coins = leaderstats:FindFirstChild(\"Coins\")\n    if not coins then return end\n    \n    if coins.Value >= itemCost then\n        -- Tell server to process purchase (NEVER trust client!)\n        game.ReplicatedStorage.BuyItem:FireServer(itemName)\n        \n        button.Text = \"✅ Purchased!\"\n        button.BackgroundColor3 = Color3.fromRGB(0, 150, 0)\n        wait(2)\n        button.Text = itemName .. \" — \" .. itemCost .. \" coins\"\n        button.BackgroundColor3 = Color3.fromRGB(50, 50, 150)\n    else\n        button.Text = \"❌ Need \" .. (itemCost - coins.Value) .. \" more!\"\n        button.BackgroundColor3 = Color3.fromRGB(150, 0, 0)\n        wait(2)\n        button.Text = itemName .. \" — \" .. itemCost .. \" coins\"\n        button.BackgroundColor3 = Color3.fromRGB(50, 50, 150)\n    end\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Toggle Button Pattern"
              },
              {
                type: "code",
                language: "lua",
                filename: "toggle_button.lua",
                code: "-- A reusable toggle button pattern\nlocal button = script.Parent\nlocal isOn = false\n\nlocal ON_COLOR = Color3.fromRGB(0, 200, 0)   -- Green\nlocal OFF_COLOR = Color3.fromRGB(200, 0, 0)  -- Red\n\nlocal function updateVisual()\n    if isOn then\n        button.Text = \"🔊 Music: ON\"\n        button.BackgroundColor3 = ON_COLOR\n    else\n        button.Text = \"🔇 Music: OFF\"\n        button.BackgroundColor3 = OFF_COLOR\n    end\nend\n\nbutton.MouseButton1Click:Connect(function()\n    isOn = not isOn  -- Flip the value\n    updateVisual()\n    \n    -- Actually toggle the music\n    local music = workspace:FindFirstChild(\"BackgroundMusic\")\n    if music then\n        if isOn then\n            music:Play()\n        else\n            music:Stop()\n        end\n    end\nend)\n\n-- Set initial state\nupdateVisual()"
              },
              {
                type: "warning",
                content: "Never process purchases on the client! A hacker could modify the LocalScript to give themselves items for free. Always send purchase requests to the server with FireServer(), and have the server validate that the player has enough coins before giving the item."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create a menu with 'Play' and 'Settings' buttons. Play hides the menu, Settings toggles a panel.",
                  "**Exercise 2:** Build a shop button that checks coin count and shows 'Purchased' or 'Not enough coins'.",
                  "**Exercise 3:** Create a music toggle button that starts/stops a Sound object in Workspace.",
                  "**Exercise 4:** Add hover effects (color change) to all your buttons.",
                  "**Exercise 5:** Create a notification system: a TextLabel that fades in with a message and fades out after 3 seconds."
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Inventory Grid UI"
              },
              {
                type: "text",
                content: "A grid-based inventory is essential for RPGs, survival games, and tycoons. Here's how to build one programmatically:"
              },
              {
                type: "code",
                language: "lua",
                filename: "inventory_grid.lua",
                code: "-- LocalScript for an inventory grid system\nlocal player = game.Players.LocalPlayer\nlocal playerGui = player:WaitForChild(\"PlayerGui\")\n\n-- Create the inventory screen\nlocal screenGui = Instance.new(\"ScreenGui\")\nscreenGui.Name = \"InventoryUI\"\nscreenGui.Parent = playerGui\n\n-- Background panel\nlocal inventoryFrame = Instance.new(\"Frame\")\ninventoryFrame.Name = \"InventoryPanel\"\ninventoryFrame.Size = UDim2.new(0, 400, 0, 350)\ninventoryFrame.Position = UDim2.new(0.5, 0, 0.5, 0)\ninventoryFrame.AnchorPoint = Vector2.new(0.5, 0.5)\ninventoryFrame.BackgroundColor3 = Color3.fromRGB(30, 30, 40)\ninventoryFrame.Visible = false  -- Start hidden\ninventoryFrame.Parent = screenGui\n\n-- Title\nlocal title = Instance.new(\"TextLabel\")\ntitle.Size = UDim2.new(1, 0, 0, 40)\ntitle.BackgroundColor3 = Color3.fromRGB(50, 50, 70)\ntitle.TextColor3 = Color3.fromRGB(255, 255, 255)\ntitle.Font = Enum.Font.GothamBold\ntitle.TextSize = 20\ntitle.Text = \"🎒 Inventory\"\ntitle.Parent = inventoryFrame\n\n-- Grid container\nlocal gridFrame = Instance.new(\"Frame\")\ngridFrame.Size = UDim2.new(1, -20, 1, -60)\ngridFrame.Position = UDim2.new(0, 10, 0, 50)\ngridFrame.BackgroundTransparency = 1\ngridFrame.Parent = inventoryFrame\n\n-- Add grid layout\nlocal gridLayout = Instance.new(\"UIGridLayout\")\ngridLayout.CellSize = UDim2.new(0, 70, 0, 70)\ngridLayout.CellPadding = UDim2.new(0, 8, 0, 8)\ngridLayout.Parent = gridFrame\n\n-- Create inventory slots\nfor i = 1, 20 do\n    local slot = Instance.new(\"TextButton\")\n    slot.Name = \"Slot_\" .. i\n    slot.BackgroundColor3 = Color3.fromRGB(60, 60, 80)\n    slot.TextColor3 = Color3.fromRGB(200, 200, 200)\n    slot.Font = Enum.Font.Gotham\n    slot.TextSize = 12\n    slot.Text = \"Empty\"\n    slot.Parent = gridFrame\n    \n    -- Add rounded corners\n    local corner = Instance.new(\"UICorner\")\n    corner.CornerRadius = UDim.new(0, 6)\n    corner.Parent = slot\n    \n    -- Click handler for each slot\n    slot.MouseButton1Click:Connect(function()\n        if slot.Text ~= \"Empty\" then\n            print(\"Selected: \" .. slot.Text)\n        end\n    end)\nend\n\n-- Toggle inventory with a keybind (E key)\nlocal UserInputService = game:GetService(\"UserInputService\")\nUserInputService.InputBegan:Connect(function(input, processed)\n    if processed then return end  -- Ignore if typing in chat\n    if input.KeyCode == Enum.KeyCode.E then\n        inventoryFrame.Visible = not inventoryFrame.Visible\n    end\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Popup Dialog System"
              },
              {
                type: "code",
                language: "lua",
                filename: "dialog_system.lua",
                code: "-- Reusable dialog popup with Yes/No buttons\nlocal TweenService = game:GetService(\"TweenService\")\n\nlocal function createDialog(parent, message, onYes, onNo)\n    -- Dark overlay\n    local overlay = Instance.new(\"Frame\")\n    overlay.Size = UDim2.new(1, 0, 1, 0)\n    overlay.BackgroundColor3 = Color3.fromRGB(0, 0, 0)\n    overlay.BackgroundTransparency = 0.5\n    overlay.ZIndex = 100\n    overlay.Parent = parent\n    \n    -- Dialog box\n    local dialog = Instance.new(\"Frame\")\n    dialog.Size = UDim2.new(0, 300, 0, 150)\n    dialog.Position = UDim2.new(0.5, 0, 0.5, 0)\n    dialog.AnchorPoint = Vector2.new(0.5, 0.5)\n    dialog.BackgroundColor3 = Color3.fromRGB(40, 40, 55)\n    dialog.ZIndex = 101\n    dialog.Parent = overlay\n    \n    local corner = Instance.new(\"UICorner\")\n    corner.CornerRadius = UDim.new(0, 12)\n    corner.Parent = dialog\n    \n    -- Message text\n    local label = Instance.new(\"TextLabel\")\n    label.Size = UDim2.new(1, -20, 0, 80)\n    label.Position = UDim2.new(0, 10, 0, 10)\n    label.BackgroundTransparency = 1\n    label.TextColor3 = Color3.fromRGB(255, 255, 255)\n    label.Font = Enum.Font.Gotham\n    label.TextSize = 16\n    label.TextWrapped = true\n    label.Text = message\n    label.ZIndex = 102\n    label.Parent = dialog\n    \n    -- Yes button\n    local yesBtn = Instance.new(\"TextButton\")\n    yesBtn.Size = UDim2.new(0, 120, 0, 36)\n    yesBtn.Position = UDim2.new(0, 20, 1, -46)\n    yesBtn.BackgroundColor3 = Color3.fromRGB(0, 160, 0)\n    yesBtn.TextColor3 = Color3.fromRGB(255, 255, 255)\n    yesBtn.Font = Enum.Font.GothamBold\n    yesBtn.TextSize = 14\n    yesBtn.Text = \"✅ Yes\"\n    yesBtn.ZIndex = 102\n    yesBtn.Parent = dialog\n    \n    -- No button\n    local noBtn = Instance.new(\"TextButton\")\n    noBtn.Size = UDim2.new(0, 120, 0, 36)\n    noBtn.Position = UDim2.new(1, -140, 1, -46)\n    noBtn.BackgroundColor3 = Color3.fromRGB(160, 0, 0)\n    noBtn.TextColor3 = Color3.fromRGB(255, 255, 255)\n    noBtn.Font = Enum.Font.GothamBold\n    noBtn.TextSize = 14\n    noBtn.Text = \"❌ No\"\n    noBtn.ZIndex = 102\n    noBtn.Parent = dialog\n    \n    yesBtn.MouseButton1Click:Connect(function()\n        overlay:Destroy()\n        if onYes then onYes() end\n    end)\n    \n    noBtn.MouseButton1Click:Connect(function()\n        overlay:Destroy()\n        if onNo then onNo() end\n    end)\n    \n    return overlay\nend\n\n-- Usage:\n-- createDialog(screenGui, \"Buy Sword for 50 coins?\",\n--     function() print(\"Bought!\") end,\n--     function() print(\"Cancelled\") end\n-- )"
              },
              {
                type: "heading",
                level: 2,
                content: "Cooldown Button (Visual Timer)"
              },
              {
                type: "code",
                language: "lua",
                filename: "cooldown_button.lua",
                code: "-- A button with a visual cooldown timer\nlocal TweenService = game:GetService(\"TweenService\")\nlocal button = script.Parent\nlocal COOLDOWN_TIME = 5  -- seconds\nlocal ready = true\n\nlocal originalText = \"⚡ Use Ability\"\nlocal originalColor = Color3.fromRGB(80, 80, 200)\n\nbutton.Text = originalText\nbutton.BackgroundColor3 = originalColor\n\nbutton.MouseButton1Click:Connect(function()\n    if not ready then return end\n    ready = false\n    \n    -- Activate the ability\n    print(\"Ability activated!\")\n    \n    -- Visual cooldown countdown\n    for i = COOLDOWN_TIME, 1, -1 do\n        button.Text = \"⏳ \" .. i .. \"s\"\n        button.BackgroundColor3 = Color3.fromRGB(100, 100, 100)\n        wait(1)\n    end\n    \n    -- Ready again!\n    button.Text = originalText\n    button.BackgroundColor3 = originalColor\n    ready = true\nend)"
              },
              {
                type: "tip",
                content: "When building complex UI systems, use ModuleScripts to create reusable UI components. Write functions like createButton(), createSlider(), createDropdown() once, then reuse them throughout your game. This saves enormous time!"
              },
              {
                type: "checkpoint",
                content: "Create a simple menu with a 'Play' button that hides the menu when clicked, and a 'Settings' button that toggles a settings panel. Add hover effects to both buttons!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 6,
      title: "Multiplayer & Data",
      lessons: [
        {
          id: "6-1",
          title: "Client-Server Communication",
          completed: false,
          content: {
            description: "Master RemoteEvents and RemoteFunctions to make your game truly multiplayer. Understand client-server architecture and secure your game against cheaters.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll understand the client-server model, use RemoteEvents for communication, and know how to prevent common exploits.

Roblox games are **multiplayer by default**, which means some code runs on the server (shared for everyone) and some runs on each player's device (client). Understanding this split is critical — it determines what's secure, what's fast, and what's visible to each player.

Think of it like a restaurant: the server (kitchen) prepares the real food, and the client (your table) is where you see and interact with it. If you could change your own receipt at the table, that'd be cheating — that's why important logic must happen in the kitchen!`
              },
              {
                type: "heading",
                level: 2,
                content: "Client vs Server"
              },
              {
                type: "code",
                language: "text",
                filename: "client_vs_server.txt",
                code: "CLIENT (LocalScript — runs on player's device):\n• Handles: GUI, camera, keyboard/mouse input, local effects\n• Location: StarterGui, StarterPlayer, ReplicatedFirst\n• Trust level: ZERO! Can be hacked/modified by exploiters\n• Each player runs their own copy\n\nSERVER (Script — runs on Roblox servers):\n• Handles: Game logic, data saving, spawning, combat\n• Location: ServerScriptService, ServerStorage\n• Trust level: HIGH! Players cannot modify server code\n• One server runs for all players\n\n★ THE GOLDEN RULE ★\nNever trust the client! Always validate on the server.\nIf a client says 'give me 999 coins', the server must\nverify they actually earned them."
              },
              {
                type: "heading",
                level: 2,
                content: "RemoteEvents — Client ↔ Server"
              },
              {
                type: "code",
                language: "lua",
                filename: "remote_events.lua",
                code: "-- Create a RemoteEvent in ReplicatedStorage (name it 'BuyItem')\n\n-- === CLIENT → SERVER (FireServer) ===\n-- LocalScript in StarterGui\nlocal remote = game.ReplicatedStorage:WaitForChild(\"BuyItem\")\nlocal button = script.Parent\n\nbutton.MouseButton1Click:Connect(function()\n    -- Send request to server\n    remote:FireServer(\"Sword\", 50)\n    -- Arguments: item name, expected cost\nend)\n\n-- Script in ServerScriptService\nlocal remote = game.ReplicatedStorage:WaitForChild(\"BuyItem\")\n\nremote.OnServerEvent:Connect(function(player, itemName, cost)\n    -- 'player' is automatically passed — you can't fake it!\n    print(player.Name .. \" wants to buy \" .. itemName)\n    \n    -- VALIDATE on the server (never trust client data!)\n    local coins = player.leaderstats.Coins\n    if coins.Value >= cost then\n        coins.Value -= cost\n        -- Give the item...\n        print(\"Purchase approved!\")\n    else\n        print(\"Purchase denied — not enough coins\")\n    end\nend)\n\n\n-- === SERVER → CLIENT (FireClient / FireAllClients) ===\n-- Script in ServerScriptService\nlocal notify = game.ReplicatedStorage:WaitForChild(\"Notify\")\n\n-- Send to ONE specific player\nnotify:FireClient(somePlayer, \"You found a secret!\")\n\n-- Send to ALL players\nnotify:FireAllClients(\"Round starting in 10 seconds!\")\n\n-- LocalScript in StarterGui\nlocal notify = game.ReplicatedStorage:WaitForChild(\"Notify\")\nnotify.OnClientEvent:Connect(function(message)\n    script.Parent.Text = message  -- Show on screen\nend)"
              },
              {
                type: "warning",
                content: "NEVER trust data from FireServer! Exploiters can send any values they want. A client might fire BuyItem with a cost of 0, or an invalid item name. Always verify everything on the server: check the real item price from your server data, verify the player has enough coins, and validate the item exists."
              },
              {
                type: "tip",
                content: "The 'player' parameter in OnServerEvent is automatically provided by Roblox — you can't fake it. This is your reliable way to know WHO sent the request."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create a RemoteEvent that lets a client request a speed boost. The server validates and applies it.",
                  "**Exercise 2:** Build a chat notification system where the server sends messages to all clients.",
                  "**Exercise 3:** Create a shop with 3 items using RemoteEvents for purchase requests.",
                  "**Exercise 4:** Add server-side validation that prevents buying the same item twice.",
                  "**Exercise 5:** Build a voting system where clients send votes and the server tallies them."
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "RemoteFunctions — Request + Response"
              },
              {
                type: "text",
                content: "While RemoteEvents send one-way messages, RemoteFunctions let the client **ask** the server something and **wait for an answer**:"
              },
              {
                type: "code",
                language: "lua",
                filename: "remote_functions.lua",
                code: "-- RemoteFunction lets client ask server and GET A RESPONSE\n-- Create a RemoteFunction in ReplicatedStorage called 'GetShopItems'\n\n-- SERVER (Script in ServerScriptService)\nlocal getShopItems = game.ReplicatedStorage:WaitForChild(\"GetShopItems\")\n\nlocal shopInventory = {\n    {name = \"Speed Boost\", cost = 50, description = \"2x speed for 30s\"},\n    {name = \"High Jump\", cost = 75, description = \"3x jump power for 30s\"},\n    {name = \"Shield\", cost = 100, description = \"Blocks next hit\"},\n}\n\ngetShopItems.OnServerInvoke = function(player)\n    -- Return shop data to the client\n    print(player.Name .. \" is browsing the shop\")\n    return shopInventory\nend\n\n-- CLIENT (LocalScript in StarterGui)\nlocal getShopItems = game.ReplicatedStorage:WaitForChild(\"GetShopItems\")\n\n-- This WAITS for the server to respond\nlocal items = getShopItems:InvokeServer()\n\n-- Now 'items' has the shop data!\nfor i, item in ipairs(items) do\n    print(item.name .. \" — \" .. item.cost .. \" coins\")\n    print(\"   \" .. item.description)\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Security Best Practices"
              },
              {
                type: "code",
                language: "lua",
                filename: "security_patterns.lua",
                code: "-- ❌ BAD: Trusting client data\nremote.OnServerEvent:Connect(function(player, itemName, price)\n    -- A hacker could send price = 0!\n    player.leaderstats.Coins.Value -= price  -- WRONG!\nend)\n\n-- ✅ GOOD: Server validates everything\nlocal ITEM_PRICES = {\n    [\"Sword\"] = 50,\n    [\"Shield\"] = 75,\n    [\"Potion\"] = 25,\n}\n\nremote.OnServerEvent:Connect(function(player, itemName)\n    -- Look up the REAL price on the server\n    local realPrice = ITEM_PRICES[itemName]\n    \n    -- Validate the item exists\n    if not realPrice then\n        warn(player.Name .. \" requested invalid item: \" .. tostring(itemName))\n        return\n    end\n    \n    -- Validate player can afford it\n    local coins = player.leaderstats.Coins\n    if coins.Value < realPrice then\n        warn(player.Name .. \" can't afford \" .. itemName)\n        return\n    end\n    \n    -- All checks passed — process the purchase\n    coins.Value -= realPrice\n    print(\"✅ \" .. player.Name .. \" bought \" .. itemName .. \" for \" .. realPrice)\n    -- Give the item...\nend)\n\n-- ✅ GOOD: Rate limiting to prevent spam\nlocal lastFireTime = {}\nlocal COOLDOWN = 1  -- 1 second between requests\n\nremote.OnServerEvent:Connect(function(player, ...)\n    local now = tick()\n    local lastTime = lastFireTime[player.UserId] or 0\n    \n    if now - lastTime < COOLDOWN then\n        warn(player.Name .. \" is firing too fast! Ignoring.\")\n        return\n    end\n    \n    lastFireTime[player.UserId] = now\n    -- Process the request...\nend)"
              },
              {
                type: "warning",
                content: "NEVER use RemoteFunction's OnClientInvoke (server calling client and waiting for a response). A malicious client could stall or crash the server by never responding. Only use OnServerInvoke (client asks server) which is safe."
              },
              {
                type: "heading",
                level: 2,
                content: "Complete Multiplayer Example: Team Chat"
              },
              {
                type: "code",
                language: "lua",
                filename: "team_notification.lua",
                code: "-- Server-side team notification system\n-- Put in ServerScriptService\n\nlocal Players = game:GetService(\"Players\")\nlocal announceRemote = game.ReplicatedStorage:WaitForChild(\"Announce\")\n\n-- Send announcement to all players\nlocal function announceToAll(message, color)\n    color = color or Color3.fromRGB(255, 255, 255)\n    announceRemote:FireAllClients(message, color)\nend\n\n-- Announce when players join/leave\nPlayers.PlayerAdded:Connect(function(player)\n    announceToAll(\n        \"👋 \" .. player.Name .. \" joined the game!\",\n        Color3.fromRGB(100, 255, 100)  -- Green\n    )\nend)\n\nPlayers.PlayerRemoving:Connect(function(player)\n    announceToAll(\n        \"👋 \" .. player.Name .. \" left the game.\",\n        Color3.fromRGB(255, 100, 100)  -- Red\n    )\nend)\n\n-- Client-side: show the announcement\n-- LocalScript in StarterGui\nlocal announceRemote = game.ReplicatedStorage:WaitForChild(\"Announce\")\nlocal label = script.Parent  -- A TextLabel\n\nannounceRemote.OnClientEvent:Connect(function(message, color)\n    label.Text = message\n    label.TextColor3 = color\n    label.Visible = true\n    \n    wait(4)\n    label.Visible = false\nend)"
              },
              {
                type: "quiz",
                question: "Why should game logic (like giving items) be on the server?",
                options: [
                  { id: "a", text: "It's faster" },
                  { id: "b", text: "The server can't be hacked, preventing cheating" },
                  { id: "c", text: "LocalScripts can't give items" },
                  { id: "d", text: "It's required by Roblox" }
                ],
                correct: "b",
                explanation: "Exploiters can modify client code (LocalScripts) freely. But they cannot modify server code. By putting important logic like currency, items, and combat on the server, you make it impossible to cheat!"
              }
            ]
          }
        },
        {
          id: "6-2",
          title: "Saving Player Data",
          completed: false,
          content: {
            description: "Persist player progress between game sessions using DataStoreService. Save coins, levels, inventory, and settings so players never lose their progress.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll implement a complete data saving system using DataStoreService with proper error handling, so player progress persists between sessions.

Without data saving, all progress is lost when a player leaves. They'd have to re-collect every coin, re-complete every checkpoint, every single time they play. **DataStoreService** solves this by saving data to Roblox's cloud servers. When a player returns, their data is loaded and restored.

Data persistence is what makes a game feel "real." Players invest time and effort into earning coins and completing stages. If that progress disappears, they feel cheated and won't come back. Every successful Roblox game saves player data — it's not optional, it's essential.`
              },
              {
                type: "heading",
                level: 2,
                content: "What is DataStoreService?"
              },
              {
                type: "text",
                content: "DataStoreService is Roblox's cloud database system. Think of it as a giant filing cabinet in the cloud where each player has their own folder. When they play, you open their folder and read their data. When they leave, you put updated data back in the folder."
              },
              {
                type: "code",
                language: "text",
                filename: "datastore_concepts.txt",
                code: "HOW DATASTORES WORK:\n━━━━━━━━━━━━━━━━━━━\n\nDataStore = A named storage area (like a filing cabinet)\n  └── Keys = Individual entries (like folders in the cabinet)\n       └── Values = The actual data (like documents in the folder)\n\nExample:\n  DataStore: \"PlayerData_v1\" (our cabinet)\n    Key: \"Player_12345678\"   (folder for player with userId 12345678)\n    Value: {Coins=150, Stage=5, PlayTime=3600}\n\nKEY OPERATIONS:\n  GetAsync(key)     → Read data from the store\n  SetAsync(key, val) → Write data to the store (overwrites!)\n  UpdateAsync(key, fn) → Read + modify + write atomically\n  RemoveAsync(key)   → Delete data\n\nLIMITS (important!):\n  • 60 + numPlayers×10 requests per minute (per datastore)\n  • Max 4MB per key\n  • Max 50 characters per key name\n  • Keys are global — all servers share the same data!"
              },
              {
                type: "heading",
                level: 2,
                content: "Enabling DataStores"
              },
              {
                type: "code",
                language: "text",
                filename: "enable_datastores.txt",
                code: "Before DataStores work, you need to:\n\n1. PUBLISH your game first!\n   File → Publish to Roblox → Create\n\n2. Enable API access:\n   Game Settings → Security → Enable Studio Access to API Services ✅\n\n3. DataStores only work:\n   • In published games\n   • When API access is enabled\n   • In Server Scripts (not LocalScripts!)\n   • NOT in Team Create Test mode (sometimes)"
              },
              {
                type: "heading",
                level: 2,
                content: "Complete Data Save/Load System"
              },
              {
                type: "code",
                language: "lua",
                filename: "data_system.lua",
                code: "-- Put this in ServerScriptService!\nlocal DataStoreService = game:GetService(\"DataStoreService\")\nlocal Players = game:GetService(\"Players\")\n\n-- Get (or create) a DataStore\nlocal playerDataStore = DataStoreService:GetDataStore(\"PlayerData_v1\")\n\n-- Default data for new players\nlocal DEFAULT_DATA = {\n    Coins = 0,\n    Stage = 1,\n    PlayTime = 0\n}\n\n-- LOAD data when player joins\nPlayers.PlayerAdded:Connect(function(player)\n    -- Create leaderstats\n    local leaderstats = Instance.new(\"Folder\")\n    leaderstats.Name = \"leaderstats\"\n    leaderstats.Parent = player\n    \n    local coins = Instance.new(\"IntValue\")\n    coins.Name = \"Coins\"\n    coins.Parent = leaderstats\n    \n    local stage = Instance.new(\"IntValue\")\n    stage.Name = \"Stage\"\n    stage.Parent = leaderstats\n    \n    -- Try to load saved data\n    local success, data = pcall(function()\n        return playerDataStore:GetAsync(\"Player_\" .. player.UserId)\n    end)\n    \n    if success and data then\n        -- Data found! Restore it\n        coins.Value = data.Coins or DEFAULT_DATA.Coins\n        stage.Value = data.Stage or DEFAULT_DATA.Stage\n        print(\"✅ Loaded data for \" .. player.Name)\n    else\n        -- New player or load failed — use defaults\n        coins.Value = DEFAULT_DATA.Coins\n        stage.Value = DEFAULT_DATA.Stage\n        print(\"🆕 New player: \" .. player.Name)\n    end\nend)\n\n-- SAVE function\nlocal function savePlayerData(player)\n    local leaderstats = player:FindFirstChild(\"leaderstats\")\n    if not leaderstats then return end\n    \n    local data = {\n        Coins = leaderstats.Coins.Value,\n        Stage = leaderstats.Stage.Value\n    }\n    \n    local success, err = pcall(function()\n        playerDataStore:SetAsync(\"Player_\" .. player.UserId, data)\n    end)\n    \n    if success then\n        print(\"✅ Saved data for \" .. player.Name)\n    else\n        warn(\"❌ Failed to save for \" .. player.Name .. \": \" .. err)\n    end\nend\n\n-- Save when player leaves\nPlayers.PlayerRemoving:Connect(savePlayerData)\n\n-- Save ALL players when server shuts down\ngame:BindToClose(function()\n    for _, player in ipairs(Players:GetPlayers()) do\n        savePlayerData(player)\n    end\nend)"
              },
              {
                type: "tip",
                content: "Always use pcall() with DataStore operations! DataStores can fail due to network issues, rate limits, or server problems. pcall catches errors so your game keeps running instead of crashing."
              },
              {
                type: "warning",
                content: "DataStores have rate limits! Don't save every time a player picks up a coin. Save when they leave (PlayerRemoving) and when the server shuts down (BindToClose). For auto-saving, save once every 60-120 seconds at most."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Implement the basic data save/load system with Coins.",
                  "**Exercise 2:** Add Stage saving so checkpoint progress persists.",
                  "**Exercise 3:** Add an auto-save every 120 seconds using a while loop.",
                  "**Exercise 4:** Test data persistence: collect coins, leave, rejoin — verify coins are saved.",
                  "**Exercise 5:** Add error handling with retry logic — if save fails, try again up to 3 times."
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Auto-Save System"
              },
              {
                type: "text",
                content: "Relying solely on saving when a player leaves is risky — server crashes can lose data. Implement an auto-save system as a safety net:"
              },
              {
                type: "code",
                language: "lua",
                filename: "auto_save.lua",
                code: "-- Add this to your data system script in ServerScriptService\n\nlocal AUTO_SAVE_INTERVAL = 120  -- Save every 2 minutes\n\n-- Auto-save loop\nspawn(function()\n    while true do\n        wait(AUTO_SAVE_INTERVAL)\n        \n        for _, player in ipairs(Players:GetPlayers()) do\n            -- Wrap in pcall for safety\n            local success, err = pcall(function()\n                savePlayerData(player)\n            end)\n            \n            if not success then\n                warn(\"Auto-save failed for \" .. player.Name .. \": \" .. err)\n            end\n        end\n        \n        print(\"💾 Auto-save complete for all players\")\n    end\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Data Store Retry Logic"
              },
              {
                type: "code",
                language: "lua",
                filename: "retry_logic.lua",
                code: "-- Robust save function with retry logic\nlocal MAX_RETRIES = 3\nlocal RETRY_DELAY = 2  -- seconds between retries\n\nlocal function saveWithRetry(player)\n    local leaderstats = player:FindFirstChild(\"leaderstats\")\n    if not leaderstats then return false end\n    \n    local data = {\n        Coins = leaderstats.Coins.Value,\n        Stage = leaderstats.Stage.Value\n    }\n    \n    for attempt = 1, MAX_RETRIES do\n        local success, err = pcall(function()\n            playerDataStore:SetAsync(\"Player_\" .. player.UserId, data)\n        end)\n        \n        if success then\n            print(\"✅ Saved \" .. player.Name .. \" (attempt \" .. attempt .. \")\")\n            return true\n        else\n            warn(\"❌ Save attempt \" .. attempt .. \" failed: \" .. err)\n            if attempt < MAX_RETRIES then\n                wait(RETRY_DELAY)\n            end\n        end\n    end\n    \n    warn(\"🚨 ALL SAVE ATTEMPTS FAILED for \" .. player.Name)\n    return false\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Saving Complex Data (Inventory)"
              },
              {
                type: "code",
                language: "lua",
                filename: "complex_data.lua",
                code: "-- DataStores can save tables — perfect for inventory systems!\n\nlocal DEFAULT_DATA = {\n    Coins = 0,\n    Stage = 1,\n    PlayTime = 0,\n    Inventory = {},       -- List of owned items\n    Settings = {\n        MusicEnabled = true,\n        SFXVolume = 0.8,\n    },\n}\n\n-- Deep copy function to avoid reference issues\nlocal function deepCopy(original)\n    local copy = {}\n    for k, v in pairs(original) do\n        if type(v) == \"table\" then\n            copy[k] = deepCopy(v)\n        else\n            copy[k] = v\n        end\n    end\n    return copy\nend\n\n-- Load with defaults for missing fields\nlocal function loadPlayerData(player)\n    local success, savedData = pcall(function()\n        return playerDataStore:GetAsync(\"Player_\" .. player.UserId)\n    end)\n    \n    -- Start with a copy of defaults\n    local data = deepCopy(DEFAULT_DATA)\n    \n    -- Merge saved data on top of defaults\n    if success and savedData then\n        for key, value in pairs(savedData) do\n            if type(value) == \"table\" and type(data[key]) == \"table\" then\n                -- Merge nested tables\n                for k2, v2 in pairs(value) do\n                    data[key][k2] = v2\n                end\n            else\n                data[key] = value\n            end\n        end\n    end\n    \n    return data\nend\n\n-- This pattern ensures new players get defaults\n-- AND existing players keep their data even when\n-- you add new fields in updates!"
              },
              {
                type: "tip",
                content: "Version your DataStore names! Use 'PlayerData_v1', 'PlayerData_v2', etc. If you change the data structure significantly, you can migrate players from the old version to the new one without losing their data."
              },
              {
                type: "checkpoint",
                content: "Implement data saving for your coin and checkpoint system. Collect some coins, leave the game, rejoin, and verify your coins and stage are still there!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 7,
      title: "Publishing & Polish",
      lessons: [
        {
          id: "7-1",
          title: "Game Polish & Testing",
          completed: false,
          content: {
            description: "Transform your game from a prototype to a polished experience. Learn testing techniques, visual effects, sound design, and the finishing touches that make games feel professional.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll know how to test thoroughly, add visual polish, implement sound effects, and prepare your game for public release.

The difference between a game people play once and a game they come back to is **polish**. Polish is the sound effects, the particle effects, the smooth animations, the helpful UI, and the dozens of small details that make a game feel complete. A polished game feels like someone cared about every detail — because they did.

Professional game studios spend 30-50% of development time on polish alone. It's that important. A game with basic graphics but excellent "game feel" will always outperform a beautiful game that feels clunky. In this lesson, you'll learn the polish techniques that transform your game from amateur to professional.`
              },
              {
                type: "heading",
                level: 2,
                content: "Testing Checklist"
              },
              {
                type: "code",
                language: "text",
                filename: "testing_checklist.txt",
                code: "Before publishing, test EVERYTHING:\n\n□ Play through entire game start to finish\n□ Die and respawn — do you appear at the right checkpoint?\n□ Collect coins — does the leaderboard update?\n□ Leave and rejoin — is data saved correctly?\n□ Test on mobile (phone) — can you reach everything?\n□ Check for parts you can fall through\n□ Look for floating parts or misaligned builds\n□ Test with 2+ players (F8 for local server test)\n□ Check Output for errors (red text = problems!)\n□ Remove test scripts and debug prints\n□ Verify spawn location works\n□ Test all buttons and GUIs"
              },
              {
                type: "heading",
                level: 2,
                content: "Adding Particle Effects"
              },
              {
                type: "code",
                language: "lua",
                filename: "particle_effects.lua",
                code: "-- Add visual flair to coin collection!\nlocal function createCollectionEffect(position)\n    -- Create a temporary part for the particles\n    local effect = Instance.new(\"Part\")\n    effect.Size = Vector3.new(1, 1, 1)\n    effect.Position = position\n    effect.Anchored = true\n    effect.CanCollide = false\n    effect.Transparency = 1  -- Invisible part\n    effect.Parent = workspace\n    \n    -- Add sparkle particles\n    local particles = Instance.new(\"ParticleEmitter\")\n    particles.Color = ColorSequence.new(Color3.fromRGB(255, 215, 0))  -- Gold\n    particles.Size = NumberSequence.new(0.5, 0)\n    particles.Lifetime = NumberRange.new(0.5, 1)\n    particles.Rate = 50\n    particles.SpreadAngle = Vector2.new(180, 180)\n    particles.Parent = effect\n    \n    -- Emit burst then clean up\n    particles:Emit(20)  -- Burst of 20 particles\n    particles.Enabled = false\n    \n    wait(1.5)\n    effect:Destroy()  -- Clean up\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Background Music System"
              },
              {
                type: "code",
                language: "lua",
                filename: "music_system.lua",
                code: "-- Complete background music system with playlist\n-- Put in ServerScriptService or StarterPlayer\n\nlocal SoundService = game:GetService(\"SoundService\")\n\nlocal playlist = {\n    \"rbxassetid://1234567890\",  -- Song 1 (replace with real IDs)\n    \"rbxassetid://2345678901\",  -- Song 2\n    \"rbxassetid://3456789012\",  -- Song 3\n}\n\nlocal currentSong = 1\n\nlocal music = Instance.new(\"Sound\")\nmusic.Name = \"BackgroundMusic\"\nmusic.Volume = 0.3\nmusic.Looped = false  -- We'll handle looping manually\nmusic.Parent = SoundService\n\nlocal function playNext()\n    music.SoundId = playlist[currentSong]\n    music:Play()\n    \n    currentSong += 1\n    if currentSong > #playlist then\n        currentSong = 1  -- Loop back to first song\n    end\nend\n\n-- When a song ends, play the next one\nmusic.Ended:Connect(playNext)\n\n-- Start the playlist\nplayNext()"
              },
              {
                type: "heading",
                level: 2,
                content: "Sound Effects"
              },
              {
                type: "code",
                language: "lua",
                filename: "sound_effects.lua",
                code: "-- Create and play sounds programmatically\n\nlocal function playSound(parent, soundId, volume)\n    volume = volume or 0.5\n    \n    local sound = Instance.new(\"Sound\")\n    sound.SoundId = soundId\n    sound.Volume = volume\n    sound.Parent = parent\n    sound:Play()\n    \n    -- Clean up after playing\n    sound.Ended:Connect(function()\n        sound:Destroy()\n    end)\nend\n\n-- Usage examples:\n-- playSound(workspace, \"rbxassetid://12345678\", 0.8)\n\n-- Popular free sound IDs (search Roblox Toolbox for more):\n-- Coin collect: search 'coin' in Toolbox → Audio\n-- Jump: search 'jump' in Toolbox → Audio\n-- Death: search 'death' in Toolbox → Audio\n-- Background music: search 'background music' → Audio"
              },
              {
                type: "heading",
                level: 2,
                content: "Lighting & Atmosphere"
              },
              {
                type: "code",
                language: "lua",
                filename: "atmosphere.lua",
                code: "-- Set up atmospheric lighting\nlocal Lighting = game:GetService(\"Lighting\")\n\n-- Time of day\nLighting.TimeOfDay = \"14:00:00\"  -- 2 PM (bright and sunny)\n-- Or for spooky: \"22:00:00\" (night)\n\n-- Ambient colors\nLighting.Ambient = Color3.fromRGB(100, 100, 100)     -- Global light\nLighting.OutdoorAmbient = Color3.fromRGB(150, 150, 150)\n\n-- Add Atmosphere effect (haze/fog)\nlocal atmosphere = Instance.new(\"Atmosphere\")\natmosphere.Density = 0.3\natmosphere.Color = Color3.fromRGB(200, 200, 230)\natmosphere.Parent = Lighting\n\n-- Add Bloom effect (glow on bright objects)\nlocal bloom = Instance.new(\"BloomEffect\")\nbloom.Intensity = 0.5\nbloom.Threshold = 1.5\nbloom.Parent = Lighting"
              },
              {
                type: "tip",
                content: "Small polish details matter more than you think: screen shake on death, particles when collecting items, sound effects on buttons, smooth camera transitions. Players FEEL these details even if they don't consciously notice them."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Run through the testing checklist for your game. Fix every issue you find.",
                  "**Exercise 2:** Add particle effects to your coin collection system.",
                  "**Exercise 3:** Add background music to your game using a Sound in Workspace.",
                  "**Exercise 4:** Set up nice lighting with Atmosphere and Bloom effects.",
                  "**Exercise 5:** Add a loading screen that shows briefly when players join."
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Screen Shake Effect"
              },
              {
                type: "text",
                content: "Screen shake is one of the most impactful polish effects. Use it for explosions, taking damage, or boss attacks:"
              },
              {
                type: "code",
                language: "lua",
                filename: "screen_shake.lua",
                code: "-- LocalScript in StarterPlayerScripts\nlocal camera = workspace.CurrentCamera\n\nlocal function screenShake(intensity, duration)\n    local startTime = tick()\n    \n    while tick() - startTime < duration do\n        local elapsed = tick() - startTime\n        local remaining = 1 - (elapsed / duration)  -- Fade out over time\n        \n        local offsetX = math.random(-100, 100) / 100 * intensity * remaining\n        local offsetY = math.random(-100, 100) / 100 * intensity * remaining\n        \n        camera.CFrame = camera.CFrame * CFrame.new(offsetX, offsetY, 0)\n        \n        wait()  -- One frame\n    end\nend\n\n-- Usage: light shake when hit\nscreenShake(0.5, 0.3)\n\n-- Usage: heavy shake for explosions\nscreenShake(2, 0.5)\n\n-- Usage: earthquake effect\nscreenShake(1.5, 3)"
              },
              {
                type: "heading",
                level: 2,
                content: "Tweened UI Animations"
              },
              {
                type: "code",
                language: "lua",
                filename: "ui_animations.lua",
                code: "-- Smooth UI animations using TweenService\nlocal TweenService = game:GetService(\"TweenService\")\n\n-- Slide-in notification from the top\nlocal function showNotification(gui, message, duration)\n    gui.Text = message\n    gui.Position = UDim2.new(0.5, 0, 0, -50)  -- Start above screen\n    gui.Visible = true\n    \n    -- Slide down\n    local slideIn = TweenService:Create(gui, TweenInfo.new(0.3, Enum.EasingStyle.Back), {\n        Position = UDim2.new(0.5, 0, 0, 20)\n    })\n    slideIn:Play()\n    \n    wait(duration or 3)\n    \n    -- Slide back up\n    local slideOut = TweenService:Create(gui, TweenInfo.new(0.2, Enum.EasingStyle.Quad), {\n        Position = UDim2.new(0.5, 0, 0, -50)\n    })\n    slideOut:Play()\n    slideOut.Completed:Wait()\n    gui.Visible = false\nend\n\n-- Bounce effect for collecting items\nlocal function bounceEffect(gui)\n    local originalSize = gui.Size\n    \n    -- Scale up quickly\n    local scaleUp = TweenService:Create(gui, TweenInfo.new(0.1), {\n        Size = UDim2.new(\n            originalSize.X.Scale * 1.3, originalSize.X.Offset,\n            originalSize.Y.Scale * 1.3, originalSize.Y.Offset\n        )\n    })\n    \n    -- Scale back down with bounce\n    local scaleDown = TweenService:Create(\n        gui,\n        TweenInfo.new(0.3, Enum.EasingStyle.Elastic),\n        {Size = originalSize}\n    )\n    \n    scaleUp:Play()\n    scaleUp.Completed:Wait()\n    scaleDown:Play()\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Performance Optimization Tips"
              },
              {
                type: "code",
                language: "text",
                filename: "performance_tips.txt",
                code: "COMMON PERFORMANCE KILLERS & FIXES:\n\n1. TOO MANY PARTS\n   Problem: Games with 10,000+ parts run slowly\n   Fix: Use MeshParts, combine parts with Union,\n        or use Terrain for landscapes\n\n2. MEMORY LEAKS\n   Problem: Creating objects but never destroying them\n   Fix: Always :Destroy() temporary objects\n        Use Debris:AddItem() for auto-cleanup\n\n3. UNOPTIMIZED LOOPS\n   Problem: GetChildren() every frame\n   Fix: Cache results, only update when needed\n\n4. TOO MANY SCRIPTS\n   Problem: Individual scripts on every part\n   Fix: Use centralized managers (like the coin manager)\n\n5. EXCESSIVE REMOTEEVENTS\n   Problem: Firing events every frame\n   Fix: Batch updates, send only changes, rate limit\n\n6. HIGH-POLY MESHES\n   Problem: Detailed 3D models slow rendering\n   Fix: Keep under 10,000 triangles per mesh\n\nQUICK PERFORMANCE CHECK:\n• Press Ctrl+Shift+F5 for microprofiler\n• Check Settings → Rendering Stats\n• Target: 60 FPS minimum on mid-range devices"
              },
              {
                type: "warning",
                content: "Test your game on MOBILE before publishing! Many players use phones, and what runs smoothly on your PC might lag on a phone. Reduce part count, simplify effects, and make sure buttons are big enough to tap."
              },
              {
                type: "checkpoint",
                content: "Complete the testing checklist for your game. Fix at least 3 issues, add sound effects to 2 interactions, and add particle effects to coin collection."
              }
            ]
          }
        },
        {
          id: "7-2",
          title: "Publishing to Roblox",
          completed: false,
          content: {
            description: "Launch your game to the world! Learn how to publish, configure game settings, create an icon, and promote your game to get players.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, your game will be published on Roblox and accessible to millions of potential players. You'll know how to configure settings, create an appealing game page, and start building an audience.

Publishing is the most exciting moment in game development — when your creation goes from something only you can see to something the entire Roblox community can discover and play. Let's make sure your launch goes smoothly!`
              },
              {
                type: "heading",
                level: 2,
                content: "Game Settings Checklist"
              },
              {
                type: "code",
                language: "text",
                filename: "game_settings.txt",
                code: "File → Game Settings:\n\n📝 BASIC INFO:\n• Name — Choose catchy and descriptive ('Epic Obby Tower')\n• Description — What's your game about? Include keywords!\n• Genre — Pick the closest match (Adventure, Obby, etc.)\n• Max Players — Set appropriate limit (10-50 typical)\n\n🖼️ VISUALS:\n• Game Icon — 512x512 square PNG (first impression!)\n• Thumbnails — Up to 10 screenshots/artwork\n\n🔒 SECURITY:\n• Enable Studio Access to API Services ✅ (for DataStores)\n• Allow Third Party Sales ❌ (unless needed)\n\n📱 DEVICES:\n• Computer ✅\n• Phone ✅\n• Tablet ✅\n• Console ✅ (if your controls support it)"
              },
              {
                type: "heading",
                level: 2,
                content: "Publishing Steps"
              },
              {
                type: "code",
                language: "text",
                filename: "publish_steps.txt",
                code: "FIRST TIME PUBLISHING:\n1. File → Publish to Roblox\n2. Enter game name and description\n3. Click 'Create'\n4. Wait for upload\n5. Go to roblox.com/develop\n6. Find your game → Configure\n7. Set to 'Public' when ready!\n\nUPDATING:\n1. Make your changes in Studio\n2. File → Publish to Roblox\n3. Changes go live in seconds!\n\nYour game URL format:\nhttps://www.roblox.com/games/[GameId]"
              },
              {
                type: "heading",
                level: 2,
                content: "Getting Players"
              },
              {
                type: "list",
                items: [
                  "📱 **Share on social media** — TikTok, YouTube, Twitter with gameplay clips",
                  "👥 **Friends first** — Ask friends to play, they invite their friends",
                  "🎮 **Roblox groups** — Join and share in relevant game communities",
                  "📺 **Create content** — Make a trailer or gameplay video",
                  "🔄 **Update regularly** — New content keeps players coming back",
                  "👂 **Listen to feedback** — Fix what players complain about",
                  "⭐ **Optimize the first minute** — If players leave in 60 seconds, they won't come back"
                ]
              },
              {
                type: "tip",
                content: "First impressions are EVERYTHING. Your game icon and the first 30 seconds of gameplay determine if players stay. Make sure the icon is eye-catching and the opening experience is fun and clear."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Configure all game settings — name, description, genre, max players.",
                  "**Exercise 2:** Create a game icon (512x512) using any image tool.",
                  "**Exercise 3:** Take 3 in-game screenshots for thumbnails.",
                  "**Exercise 4:** Publish your game and set it to Public.",
                  "**Exercise 5:** Share the link with a friend and get feedback!"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Monetization — Earning Robux"
              },
              {
                type: "text",
                content: "Once your game has players, you can earn Robux through game passes and developer products:"
              },
              {
                type: "code",
                language: "text",
                filename: "monetization_guide.txt",
                code: "GAME PASSES (one-time purchases):\n• VIP pass — special perks, exclusive areas\n• 2x Coins — double coin collection rate\n• Custom Trail — visual effects behind player\n• Extra Lives — more respawn chances\n• Skip Stage — jump ahead in the obby\n\nDEVELOPER PRODUCTS (can buy multiple times):\n• 100 Coins — instant coin boost\n• Extra Life — one additional respawn\n• Speed Boost — temporary speed increase\n\nHOW TO CREATE A GAME PASS:\n1. Go to roblox.com/develop\n2. Click your game → Game Passes\n3. Create a new pass with name, icon, description\n4. Set the price (minimum 1 Robux)\n5. Script the benefits in your game!\n\nROBUX EARNINGS:\n• You receive 70% of Robux spent in your game\n• 100,000 Robux = roughly $350 USD (Developer Exchange)\n• DevEx requirements: 13+ age, 50,000+ earned Robux"
              },
              {
                type: "code",
                language: "lua",
                filename: "game_pass_script.lua",
                code: "-- Script in ServerScriptService to handle Game Pass perks\nlocal MarketplaceService = game:GetService(\"MarketplaceService\")\nlocal Players = game:GetService(\"Players\")\n\nlocal VIP_PASS_ID = 123456789  -- Replace with your Game Pass ID!\nlocal DOUBLE_COINS_PASS_ID = 987654321  -- Another pass\n\nPlayers.PlayerAdded:Connect(function(player)\n    -- Check if player owns VIP pass\n    local hasVIP = false\n    local success, result = pcall(function()\n        return MarketplaceService:UserOwnsGamePassAsync(\n            player.UserId, VIP_PASS_ID\n        )\n    end)\n    \n    if success then\n        hasVIP = result\n    end\n    \n    if hasVIP then\n        print(\"⭐ VIP Player: \" .. player.Name)\n        -- Give VIP perks\n        player.CharacterAdded:Connect(function(char)\n            local humanoid = char:WaitForChild(\"Humanoid\")\n            humanoid.WalkSpeed = 24  -- Faster than normal!\n        end)\n    end\n    \n    -- Check for double coins\n    local hasDouble = false\n    pcall(function()\n        hasDouble = MarketplaceService:UserOwnsGamePassAsync(\n            player.UserId, DOUBLE_COINS_PASS_ID\n        )\n    end)\n    \n    -- Store as attribute for other scripts to check\n    player:SetAttribute(\"DoubleCoins\", hasDouble or false)\nend)"
              },
              {
                type: "tip",
                content: "Price your game passes wisely! Too expensive and nobody buys them. Too cheap and you don't earn much. Look at popular games in your genre for pricing guidance. A VIP pass usually costs 50-200 Robux, while coin packs cost 25-100 Robux."
              },
              {
                type: "heading",
                level: 2,
                content: "Promoting Your Game"
              },
              {
                type: "code",
                language: "text",
                filename: "promotion_strategies.txt",
                code: "FREE PROMOTION STRATEGIES:\n━━━━━━━━━━━━━━━━━━━━━━━\n\n1. SOCIAL MEDIA\n   • TikTok: Short gameplay clips (15-30 seconds)\n   • YouTube: Tutorials, updates, trailers\n   • Twitter: Screenshots, development updates\n   • Discord: Create a community server\n\n2. ROBLOX COMMUNITY\n   • Create a Roblox Group for your game\n   • Post on the DevForum (devforum.roblox.com)\n   • Engage in game-related communities\n\n3. CONTENT QUALITY\n   • Professional game icon (this is your AD!)\n   • Compelling description with keywords\n   • Regular updates with changelog\n   • Respond to player feedback\n\n4. PLAYER RETENTION\n   • Daily rewards for returning players\n   • Seasonal events and limited-time content\n   • Achievement/badge system\n   • Regular content updates\n\n5. PAID PROMOTION (when you have Robux)\n   • Roblox Sponsored Experiences\n   • Collaborate with Roblox YouTubers\n   • Cross-promotion with other developers"
              },
              {
                type: "checkpoint",
                content: "Publish your game to Roblox! Configure the settings, add an icon, and set it to Public. Share the link with at least one person and get their feedback."
              }
            ]
          }
        }
      ]
    },
    {
      id: 8,
      title: "Congratulations! 🎉",
      lessons: [
        {
          id: "8-1",
          title: "You're a Roblox Developer!",
          completed: false,
          content: {
            description: "Amazing work! You've completed the Roblox Game Development course. Review what you've learned and discover what's next on your development journey.",
            sections: [
              {
                type: "text",
                content: `**CONGRATULATIONS, DEVELOPER!** 🎉🎮

You did it! You've gone from knowing nothing about game development to having the skills to create, code, and publish real Roblox games. That's an incredible achievement — most people never get past thinking about making a game. You actually DID it.

Think about how far you've come: you learned a real programming language (Lua), understood 3D game architecture, built interactive systems, handled multiplayer networking, and saved player data to the cloud. These aren't just "Roblox skills" — these are real computer science and software engineering concepts that transfer to any programming career.

Let's review everything you've accomplished:`
              },
              {
                type: "heading",
                level: 2,
                content: "Skills You've Mastered"
              },
              {
                type: "list",
                items: [
                  "✅ **Roblox Studio** — Navigating, building, organizing game worlds",
                  "✅ **Parts & Properties** — Creating, transforming, and customizing 3D objects",
                  "✅ **Lua Programming** — Variables, data types, math operations, strings",
                  "✅ **Logic & Decisions** — If/elseif/else statements, comparisons, boolean logic",
                  "✅ **Loops** — While loops, for loops, break, continue",
                  "✅ **Functions** — Parameters, return values, code organization",
                  "✅ **Object Hierarchy** — FindFirstChild, WaitForChild, GetChildren, GetDescendants",
                  "✅ **Events** — Touched, PlayerAdded, MouseClick, debounce pattern",
                  "✅ **Game Systems** — Coin collection, checkpoints, kill bricks, traps",
                  "✅ **User Interface** — ScreenGui, TextLabels, TextButtons, health bars",
                  "✅ **Multiplayer** — RemoteEvents, client-server architecture, security",
                  "✅ **Data Persistence** — DataStoreService, saving/loading player progress",
                  "✅ **Polish** — Particles, sounds, lighting, atmosphere",
                  "✅ **Publishing** — Game settings, icons, launching to the public"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "What's Next?"
              },
              {
                type: "list",
                items: [
                  "🎮 **Build more games** — Each game teaches you something new!",
                  "🎭 **Animations** — Make characters emote and objects animate smoothly",
                  "🚗 **Vehicles** — Build drivable cars, boats, and planes",
                  "🤖 **AI Enemies** — Create NPC behavior with pathfinding",
                  "💰 **Monetization** — Game passes and developer products for Robux",
                  "🎨 **3D Modeling** — Learn Blender to create custom meshes",
                  "🔊 **Advanced Audio** — Music systems, 3D spatial sound",
                  "🌍 **Terrain** — Create realistic landscapes with the terrain editor",
                  "📚 **Roblox Dev Forum** — Join the community at devforum.roblox.com",
                  "🏆 **Game Jams** — Compete in Roblox game jams to challenge yourself"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Game Ideas to Build Next"
              },
              {
                type: "list",
                items: [
                  "🏃 **Obby** — Expand your checkpoint system into a full obstacle course",
                  "⚔️ **Sword Fighting** — PvP combat with weapons and arenas",
                  "🏠 **Tycoon** — Build and upgrade a base to earn money",
                  "🧟 **Survival** — Collect resources, craft items, survive waves",
                  "🏎️ **Racing** — Custom vehicles on a track with lap timing",
                  "🧩 **Puzzle Game** — Logic puzzles, mazes, escape rooms",
                  "🎭 **Roleplay** — Jobs, housing, and social interaction",
                  "👾 **Tower Defense** — Place towers to stop enemy waves"
                ]
              },
              {
                type: "tip",
                content: "The best way to improve is to BUILD. Pick one game idea from the list above and start making it today. You'll encounter new challenges that force you to learn new skills. That's the fastest path to becoming a great developer!"
              },
              {
                type: "heading",
                level: 2,
                content: "Final Capstone Project"
              },
              {
                type: "text",
                content: "Put everything together with this comprehensive capstone project. Build a complete mini-game that showcases every skill you've learned:"
              },
              {
                type: "code",
                language: "text",
                filename: "capstone_project.txt",
                code: "CAPSTONE PROJECT: 'Coin Rush' — Complete Mini Game\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nBuild a timed coin-collection game with these features:\n\n1. WORLD DESIGN (Chapter 1)\n   □ Build an arena with platforms at different heights\n   □ Use different materials for visual variety\n   □ Add terrain around the edges\n   □ Create an attractive spawn area\n\n2. GAME SYSTEMS (Chapters 2-4)\n   □ Leaderstats with Coins and HighScore\n   □ 20+ coins scattered around the map\n   □ 3 coin tiers: Bronze (1pt), Silver (5pt), Gold (25pt)\n   □ 60-second countdown timer per round\n   □ Kill zones (lava, void) that reset position\n   □ Moving platforms to reach higher coins\n\n3. USER INTERFACE (Chapter 5)\n   □ Timer display (top center)\n   □ Current score display (top left)\n   □ High score display (top right)\n   □ 'Game Over' screen with final score\n   □ 'Play Again' button\n   □ Start menu with title and instructions\n\n4. MULTIPLAYER (Chapter 6)\n   □ Works for multiple players simultaneously\n   □ Each player has their own score\n   □ Announce when someone gets a new high score\n   □ Use RemoteEvents for start/end game signals\n\n5. DATA PERSISTENCE (Chapter 6)\n   □ Save each player's all-time high score\n   □ Load it when they rejoin\n   □ Display personal best on the HUD\n\n6. POLISH (Chapter 7)\n   □ Particle effects on coin collection\n   □ Sound effects (collect, timer warning, game over)\n   □ Atmosphere and lighting\n   □ Screen shake when timer hits 10 seconds\n   □ Professional game icon and description\n   □ Published and playable!\n\nESTIMATED TIME: 4-8 hours\nDIFFICULTY: Uses everything from this course!"
              },
              {
                type: "heading",
                level: 2,
                content: "Game Design Principles"
              },
              {
                type: "text",
                content: "Before you build your next game, internalize these game design principles that professionals follow:"
              },
              {
                type: "code",
                language: "text",
                filename: "design_principles.txt",
                code: "🎮 10 GAME DESIGN PRINCIPLES:\n\n1. THE 30-SECOND RULE\n   Players decide in 30 seconds if they'll keep playing.\n   Make the opening IMMEDIATELY fun and clear.\n\n2. TEACH BY DOING\n   Don't show long text tutorials. Design levels that\n   teach mechanics naturally through gameplay.\n\n3. REWARD FREQUENTLY\n   Give players small wins often: coins, sounds, effects.\n   Long gaps between rewards = boredom.\n\n4. DIFFICULTY CURVE\n   Easy → Medium → Hard. Never spike difficulty suddenly.\n   Each challenge should build on what players already know.\n\n5. JUICE IT\n   Add feedback to EVERYTHING: sounds on clicks, particles\n   on collections, screen shake on impacts. 'Juice' makes\n   simple actions feel satisfying.\n\n6. LESS IS MORE\n   A game with 3 polished features beats a game with\n   20 broken features. Finish what you start.\n\n7. PLAYTEST CONSTANTLY\n   You know your game too well to judge it fairly.\n   Watch OTHER people play. Where do they get confused?\n\n8. FAIL FAST, LEARN FAST\n   Build a rough prototype in 1 day. Test it.\n   If it's not fun, change the core mechanic or move on.\n\n9. COPY, THEN INNOVATE\n   Study games you love. Understand WHY they're fun.\n   Clone them first, then add your unique twist.\n\n10. SHIP IT\n    A finished, published game teaches you more than\n    10 unfinished projects. Done > Perfect."
              },
              {
                type: "heading",
                level: 2,
                content: "Recommended Resources"
              },
              {
                type: "code",
                language: "text",
                filename: "resources.txt",
                code: "OFFICIAL RESOURCES:\n━━━━━━━━━━━━━━━━━\n• Roblox Creator Documentation: create.roblox.com/docs\n• Roblox DevForum: devforum.roblox.com\n• Roblox Education: education.roblox.com\n• API Reference: create.roblox.com/docs/reference\n\nYOUTUBE CHANNELS:\n━━━━━━━━━━━━━━━━━\n• AlvinBlox — Beginner-friendly Roblox tutorials\n• TheDevKing — Comprehensive scripting tutorials\n• PeasFactory — Game design and advanced scripts\n• GnomeCode — Clean coding practices\n\nCOMMUNITY:\n━━━━━━━━━━━\n• Roblox Developer Discord servers\n• Hidden Developers community\n• r/robloxgamedev on Reddit\n\nTOOLS:\n━━━━━━\n• Rojo — Sync external code editors with Studio\n• Moon Animator — Advanced animation plugin\n• Blender — Free 3D modeling (for custom meshes)\n• VS Code — External code editor with Lua extensions"
              },
              {
                type: "heading",
                level: 2,
                content: "Your Development Roadmap"
              },
              {
                type: "code",
                language: "text",
                filename: "roadmap.txt",
                code: "YOUR NEXT 30 DAYS:\n━━━━━━━━━━━━━━━━━━\n\nWeek 1: Polish Your First Game\n  □ Fix all bugs from testing\n  □ Add sound effects to every interaction\n  □ Create a professional game icon\n  □ Publish and get 5 friends to play\n\nWeek 2: Build a New Game\n  □ Pick a genre (obby, tycoon, simulator)\n  □ Plan 5 core features on paper\n  □ Build the basic gameplay loop\n  □ Test with at least 3 people\n\nWeek 3: Learn Advanced Topics\n  □ Study TweenService for smooth animations\n  □ Learn ModuleScripts for code organization\n  □ Try NPC pathfinding (PathfindingService)\n  □ Experiment with Terrain tools\n\nWeek 4: Launch & Grow\n  □ Add monetization (game passes)\n  □ Create a Roblox Group\n  □ Post gameplay clips on social media\n  □ Plan your next update based on feedback"
              },
              {
                type: "text",
                content: `You started this course knowing nothing about game development. Now you can create real, playable, multiplayer games that millions of people could enjoy. That's an incredible skill to have at any age.

**Remember:** Every professional Roblox developer started exactly where you are now. The difference between those who succeed and those who don't isn't talent — it's persistence. Keep building, keep learning from mistakes, keep shipping games. Your first game won't be perfect, and that's okay. Your tenth game will be amazing.

The Roblox community is waiting for your next creation. You have the skills, the tools, and the platform. Now go make something incredible! 🚀🎮✨

**Real-World Career Paths from Roblox Development:**
The skills you've learned here open real career doors. Lua programming transfers to game development. UI design transfers to web and app development. Client-server architecture transfers to backend engineering. Data persistence transfers to database management. Many professional developers started exactly where you are now — building games for fun that turned into real skills and real careers.

Whether you become a full-time game developer, use these skills as a side hustle earning Robux, or simply enjoy the creative outlet of building games — you've gained something valuable that can never be taken away: the ability to create.

**One final challenge:** Before you close this course, open Roblox Studio and start building something new. Right now. Don't plan it, don't overthink it — just create. The best developers are the ones who never stop building.

Thank you for completing this course. Now go make games! 🎮🚀`
              }
            ]
          }
        }
      ]
    }
  ]
};