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
                content: "Smooth viewport navigation is essential. Here are the controls you'll use hundreds of times per session:"
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
                content: "The Explorer is the most important panel in Studio. It shows your game's hierarchy — every object, script, and asset organized in a tree:"
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
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create a function `calculateScore(kills, coins, time)` that returns kills*100 + coins*10 - time*5.",
                  "**Exercise 2:** Write a `clamp(value, min, max)` function that ensures a value stays within a range.",
                  "**Exercise 3:** Build a function that creates a colored part at a given position (parameters: color, size, position).",
                  "**Exercise 4:** Create a complete combat system with takeDamage(), heal(), and isAlive() functions.",
                  "**Exercise 5:** Write a function that takes a table of numbers and returns the average."
                ]
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

Coin collection is one of the most fundamental game mechanics. You'll find it in Mario, Sonic, Roblox obbies, and thousands of other games. Building this system teaches you how to combine everything you've learned: parts, events, debounce, finding objects, and functions — all working together as a real game feature.`
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

Obbies (obstacle courses) are one of the most popular Roblox game genres — and for good reason. They combine level design, scripting, and game feel into a satisfying experience. The core loop is simple: jump, avoid hazards, reach checkpoints. But making it FEEL good requires understanding all the systems underneath.`
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
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create a simple ScreenGui with a TextLabel displaying 'Hello, Player!' centered on screen.",
                  "**Exercise 2:** Build the coin counter HUD that updates when the player collects coins.",
                  "**Exercise 3:** Create a health bar using two frames (background + fill).",
                  "**Exercise 4:** Add a Stage display next to the coin counter.",
                  "**Exercise 5:** Style your GUI with custom colors, fonts, and rounded corners (add UICorner)."
                ]
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

Without data saving, all progress is lost when a player leaves. They'd have to re-collect every coin, re-complete every checkpoint, every single time they play. **DataStoreService** solves this by saving data to Roblox's cloud servers. When a player returns, their data is loaded and restored.`
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

The difference between a game people play once and a game they come back to is **polish**. Polish is the sound effects, the particle effects, the smooth animations, the helpful UI, and the dozens of small details that make a game feel complete. A polished game feels like someone cared about every detail — because they did.`
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
                type: "text",
                content: `You started this course knowing nothing about game development. Now you can create real, playable, multiplayer games that millions of people could enjoy. That's an incredible skill to have at any age.

The Roblox community is waiting for your next creation. Keep building, keep learning, keep creating. The only limit is your imagination. 🚀🎮✨`
              }
            ]
          }
        }
      ]
    }
  ]
};