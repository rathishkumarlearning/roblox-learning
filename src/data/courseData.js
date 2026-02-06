export const courseData = {
  title: "Roblox Game Development",
  description: "Create your own Roblox games with Lua scripting — turn your ideas into playable games!",
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
            description: "Discover Roblox Studio — the FREE tool used to create every Roblox game! Learn to navigate and set up your workspace.",
            sections: [
              {
                type: "text",
                content: "**Roblox Studio** is the official tool for creating Roblox games. Every game you've ever played on Roblox was made with it — and now YOU can make your own! 🎮"
              },
              {
                type: "heading",
                level: 2,
                content: "Why Learn Roblox Development?"
              },
              {
                type: "list",
                items: [
                  "🎮 **Make real games** — Publish to millions of players!",
                  "💰 **Earn Robux** — Top developers make real money",
                  "💻 **Learn coding** — Lua is a real programming language",
                  "🌍 **Huge community** — Millions of players and creators",
                  "🚀 **Portfolio builder** — Show off your skills!"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Installing Roblox Studio"
              },
              {
                type: "code",
                language: "text",
                filename: "setup.txt",
                code: "1. Go to roblox.com/create\n2. Click 'Start Creating'\n3. Download and install Roblox Studio\n4. Sign in with your Roblox account\n5. Click 'New' to create a project!\n\n(You need a Roblox account — it's free!)"
              },
              {
                type: "heading",
                level: 2,
                content: "The Studio Interface"
              },
              {
                type: "list",
                items: [
                  "**Viewport** (center) — 3D view of your game world",
                  "**Explorer** (right) — All objects in your game, like a folder tree",
                  "**Properties** (right) — Settings for selected objects",
                  "**Toolbox** (left) — Free models, plugins, assets",
                  "**Output** (bottom) — Shows errors and print messages"
                ]
              },
              {
                type: "tip",
                content: "Press F5 to playtest your game instantly! Press Shift+F5 to stop. You'll use this constantly!"
              },
              {
                type: "heading",
                level: 2,
                content: "Templates"
              },
              {
                type: "code",
                language: "text",
                filename: "templates.txt",
                code: "When creating a new game, pick a template:\n\n• Baseplate — Empty flat world (best for learning!)\n• Obby — Obstacle course starter\n• Racing — Vehicle racing setup\n• Combat — Fighting game base\n• Capture the Flag — Team game\n\nStart with BASEPLATE for this course!"
              },
              {
                type: "checkpoint",
                content: "Install Roblox Studio, create a new Baseplate project, and find the Explorer and Properties windows. Can you locate the 'Workspace' folder?"
              }
            ]
          }
        },
        {
          id: "1-2",
          title: "Building Basics",
          completed: false,
          content: {
            description: "Learn to build in Roblox! Create parts, change colors, and construct your first structures.",
            sections: [
              {
                type: "text",
                content: "Everything in Roblox is made of **Parts** — blocks, spheres, cylinders, and wedges. Let's learn to build!"
              },
              {
                type: "heading",
                level: 2,
                content: "Creating Parts"
              },
              {
                type: "code",
                language: "text",
                filename: "create_parts.txt",
                code: "Method 1: Menu\n• Click 'Model' tab → 'Part' dropdown\n• Choose: Block, Sphere, Cylinder, Wedge, Corner Wedge\n\nMethod 2: Shortcut\n• Press Ctrl+1 for Move tool\n• Press Ctrl+2 for Scale tool\n• Press Ctrl+3 for Rotate tool"
              },
              {
                type: "heading",
                level: 2,
                content: "The Transform Tools"
              },
              {
                type: "list",
                items: [
                  "**Select** (V) — Click to select objects",
                  "**Move** (Ctrl+1) — Drag arrows to move",
                  "**Scale** (Ctrl+2) — Drag handles to resize",
                  "**Rotate** (Ctrl+3) — Drag circles to rotate"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Changing Properties"
              },
              {
                type: "code",
                language: "text",
                filename: "properties.txt",
                code: "Select a part, then look at Properties panel:\n\n• Name — Give it a useful name!\n• Position — X, Y, Z coordinates\n• Size — Width, Height, Depth\n• Color — Click to pick a color (BrickColor)\n• Material — Plastic, Wood, Metal, Grass, etc.\n• Transparency — 0 (solid) to 1 (invisible)\n• Anchored — Check this so it doesn't fall!\n• CanCollide — Uncheck to walk through it"
              },
              {
                type: "warning",
                content: "Always ANCHOR parts you don't want to move! Unanchored parts will fall when the game starts. Check the 'Anchored' box in Properties."
              },
              {
                type: "heading",
                level: 2,
                content: "Build a Simple House"
              },
              {
                type: "code",
                language: "text",
                filename: "house.txt",
                code: "1. Create a Block for the floor (scale it flat & wide)\n2. Create 4 Blocks for walls (scale tall & thin)\n3. Create a Block for the roof (scale wide, angle it)\n4. Change materials:\n   - Floor: Wood\n   - Walls: Brick\n   - Roof: Slate\n5. Anchor EVERYTHING!"
              },
              {
                type: "tip",
                content: "Hold Shift while moving to snap to grid. Change grid size in Model tab → Snap to Grid. Smaller = more precise!"
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
                explanation: "Unanchored parts are affected by physics! They'll fall, roll, or get pushed around. Anchor anything that should stay in place."
              }
            ]
          }
        },
        {
          id: "1-3",
          title: "Your First Script",
          completed: false,
          content: {
            description: "Write your first Lua script! Make a part that prints a message and changes color.",
            sections: [
              {
                type: "text",
                content: "**Scripts** bring your game to life! They're written in **Lua** — a simple, powerful language used by real game developers."
              },
              {
                type: "heading",
                level: 2,
                content: "Adding a Script"
              },
              {
                type: "code",
                language: "text",
                filename: "add_script.txt",
                code: "1. In Explorer, click on a Part\n2. Click the + button next to it\n3. Search for 'Script' and click it\n4. A new script appears inside the Part!\n5. Double-click the script to open it"
              },
              {
                type: "heading",
                level: 2,
                content: "Hello World!"
              },
              {
                type: "code",
                language: "lua",
                filename: "hello.lua",
                code: "-- This is a comment (notes for yourself)\n-- Comments start with two dashes\n\nprint(\"Hello, Roblox World!\")\n\n-- Press F5 to run, then check the Output window!"
              },
              {
                type: "heading",
                level: 2,
                content: "Changing Part Properties"
              },
              {
                type: "code",
                language: "lua",
                filename: "change_part.lua",
                code: "-- Get the part this script is inside\nlocal part = script.Parent\n\n-- Wait 2 seconds\nwait(2)\n\n-- Change the color to red!\npart.BrickColor = BrickColor.new(\"Bright red\")\n\n-- Print a message\nprint(\"The part turned red!\")"
              },
              {
                type: "heading",
                level: 2,
                content: "Understanding the Code"
              },
              {
                type: "list",
                items: [
                  "**local** — Creates a variable (a container for data)",
                  "**script.Parent** — The object containing this script",
                  "**wait(2)** — Pause for 2 seconds",
                  "**part.BrickColor** — The color property of the part",
                  "**BrickColor.new()** — Creates a new color"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Color Cycle"
              },
              {
                type: "code",
                language: "lua",
                filename: "color_cycle.lua",
                code: "local part = script.Parent\n\nwhile true do  -- Loop forever\n    part.BrickColor = BrickColor.new(\"Bright red\")\n    wait(1)\n    part.BrickColor = BrickColor.new(\"Bright green\")\n    wait(1)\n    part.BrickColor = BrickColor.new(\"Bright blue\")\n    wait(1)\nend"
              },
              {
                type: "tip",
                content: "Check the Output window (View → Output) to see print messages and errors. It's your best debugging friend!"
              },
              {
                type: "checkpoint",
                content: "Create a part with a script that changes its color every second. Can you add more colors to the cycle?"
              }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "Lua Basics",
      lessons: [
        {
          id: "2-1",
          title: "Variables & Data Types",
          completed: false,
          content: {
            description: "Learn to store and use data in Lua — the foundation of all programming!",
            sections: [
              {
                type: "text",
                content: "**Variables** store information your script needs to remember — player health, score, speed, and more!"
              },
              {
                type: "heading",
                level: 2,
                content: "Creating Variables"
              },
              {
                type: "code",
                language: "lua",
                filename: "variables.lua",
                code: "-- Use 'local' to create variables\nlocal playerName = \"DragonSlayer\"\nlocal health = 100\nlocal speed = 16.5\nlocal isAlive = true\n\nprint(playerName)  -- DragonSlayer\nprint(health)      -- 100"
              },
              {
                type: "heading",
                level: 2,
                content: "Data Types"
              },
              {
                type: "code",
                language: "lua",
                filename: "data_types.lua",
                code: "-- String (text) - use quotes\nlocal name = \"Roblox\"\nlocal message = 'Hello!'  -- single quotes work too\n\n-- Number (integers and decimals)\nlocal coins = 50\nlocal speed = 16.5\n\n-- Boolean (true or false)\nlocal isJumping = false\nlocal hasKey = true\n\n-- nil (nothing/empty)\nlocal emptyValue = nil"
              },
              {
                type: "heading",
                level: 2,
                content: "Changing Variables"
              },
              {
                type: "code",
                language: "lua",
                filename: "change_vars.lua",
                code: "local score = 0\nprint(score)  -- 0\n\nscore = score + 10  -- Add 10\nprint(score)  -- 10\n\nscore = score + 5   -- Add 5 more\nprint(score)  -- 15\n\n-- Shortcut for common operations:\nlocal health = 100\nhealth -= 25  -- Same as: health = health - 25\nprint(health)  -- 75"
              },
              {
                type: "heading",
                level: 2,
                content: "String Concatenation"
              },
              {
                type: "code",
                language: "lua",
                filename: "concat.lua",
                code: "local playerName = \"Steve\"\nlocal score = 100\n\n-- Join strings with ..\nlocal message = \"Player: \" .. playerName\nprint(message)  -- Player: Steve\n\n-- Mix strings and numbers\nlocal scoreMsg = playerName .. \" scored \" .. score .. \" points!\"\nprint(scoreMsg)  -- Steve scored 100 points!"
              },
              {
                type: "tip",
                content: "Always use 'local' when creating variables! It's faster and prevents bugs. Variables without 'local' become global (visible everywhere)."
              },
              {
                type: "quiz",
                question: "What does this print: local x = 5; x = x + 3; print(x)",
                options: [
                  { id: "a", text: "5" },
                  { id: "b", text: "3" },
                  { id: "c", text: "8" },
                  { id: "d", text: "Error" }
                ],
                correct: "c",
                explanation: "x starts at 5, then we add 3 to it (x = 5 + 3), making x equal to 8!"
              }
            ]
          }
        },
        {
          id: "2-2",
          title: "If Statements",
          completed: false,
          content: {
            description: "Teach your game to make decisions! If something is true, do something.",
            sections: [
              {
                type: "text",
                content: "**If statements** let your code make decisions. IF a condition is true, THEN run some code!"
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
                code: "local health = 25\n\nif health < 50 then\n    print(\"Low health warning!\")\nend\n\n-- Only prints if health is below 50"
              },
              {
                type: "heading",
                level: 2,
                content: "If-Else"
              },
              {
                type: "code",
                language: "lua",
                filename: "if_else.lua",
                code: "local score = 85\n\nif score >= 90 then\n    print(\"Grade: A\")\nelse\n    print(\"Grade: B or lower\")\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "If-Elseif-Else"
              },
              {
                type: "code",
                language: "lua",
                filename: "if_elseif.lua",
                code: "local score = 75\n\nif score >= 90 then\n    print(\"Grade: A\")\nelseif score >= 80 then\n    print(\"Grade: B\")\nelseif score >= 70 then\n    print(\"Grade: C\")\nelseif score >= 60 then\n    print(\"Grade: D\")\nelse\n    print(\"Grade: F\")\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Comparison Operators"
              },
              {
                type: "code",
                language: "lua",
                filename: "operators.lua",
                code: "-- Comparison operators:\n==   -- Equal to\n~=   -- Not equal to\n>    -- Greater than\n<    -- Less than\n>=   -- Greater than or equal\n<=   -- Less than or equal\n\n-- Examples:\nif health == 100 then print(\"Full health!\") end\nif health ~= 0 then print(\"Still alive!\") end\nif coins >= 50 then print(\"Can buy item!\") end"
              },
              {
                type: "heading",
                level: 2,
                content: "Combining Conditions"
              },
              {
                type: "code",
                language: "lua",
                filename: "and_or.lua",
                code: "local health = 80\nlocal hasShield = true\n\n-- AND: both must be true\nif health > 50 and hasShield then\n    print(\"Ready for battle!\")\nend\n\n-- OR: at least one must be true\nif health < 20 or not hasShield then\n    print(\"Danger! Find cover!\")\nend\n\n-- NOT: flips true/false\nif not hasShield then\n    print(\"You need a shield!\")\nend"
              },
              {
                type: "tip",
                content: "In Lua, 'not equal' is ~= (tilde equals), not != like other languages. Common mistake!"
              },
              {
                type: "checkpoint",
                content: "Create a script that checks a player's coins and prints different messages: 'Poor' (< 10), 'Okay' (10-50), 'Rich' (> 50)."
              }
            ]
          }
        },
        {
          id: "2-3",
          title: "Loops",
          completed: false,
          content: {
            description: "Repeat code automatically! Loops are essential for spawning, timers, and game logic.",
            sections: [
              {
                type: "text",
                content: "**Loops** repeat code multiple times. Use them for countdowns, spawning enemies, checking conditions, and more!"
              },
              {
                type: "heading",
                level: 2,
                content: "While Loop"
              },
              {
                type: "code",
                language: "lua",
                filename: "while_loop.lua",
                code: "-- Runs while condition is true\nlocal countdown = 5\n\nwhile countdown > 0 do\n    print(countdown)\n    countdown = countdown - 1\n    wait(1)\nend\n\nprint(\"Blast off!\")"
              },
              {
                type: "heading",
                level: 2,
                content: "Infinite Loop"
              },
              {
                type: "code",
                language: "lua",
                filename: "infinite_loop.lua",
                code: "-- Runs forever (common for game loops!)\nwhile true do\n    print(\"Game is running...\")\n    wait(1)  -- IMPORTANT: always include wait()!\nend\n\n-- WARNING: Without wait(), the game freezes!"
              },
              {
                type: "warning",
                content: "ALWAYS include wait() inside infinite loops! Without it, the game freezes because the loop never gives other code a chance to run."
              },
              {
                type: "heading",
                level: 2,
                content: "For Loop (Counting)"
              },
              {
                type: "code",
                language: "lua",
                filename: "for_loop.lua",
                code: "-- Count from 1 to 10\nfor i = 1, 10 do\n    print(i)\nend\n\n-- Count by 2s\nfor i = 0, 10, 2 do\n    print(i)  -- 0, 2, 4, 6, 8, 10\nend\n\n-- Count backwards\nfor i = 5, 1, -1 do\n    print(i)  -- 5, 4, 3, 2, 1\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Practical Example: Flashing Part"
              },
              {
                type: "code",
                language: "lua",
                filename: "flashing_part.lua",
                code: "local part = script.Parent\n\n-- Flash 5 times\nfor i = 1, 5 do\n    part.BrickColor = BrickColor.new(\"Bright red\")\n    wait(0.5)\n    part.BrickColor = BrickColor.new(\"White\")\n    wait(0.5)\nend\n\nprint(\"Done flashing!\")"
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
                code: "-- break: exit the loop immediately\nfor i = 1, 100 do\n    print(i)\n    if i == 5 then\n        break  -- Stop at 5\n    end\nend\n\n-- continue: skip to next iteration\nfor i = 1, 10 do\n    if i == 5 then\n        continue  -- Skip 5\n    end\n    print(i)\nend"
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
                explanation: "The for loop counts from 1 to 3, printing each number: 1, 2, 3"
              }
            ]
          }
        },
        {
          id: "2-4",
          title: "Functions",
          completed: false,
          content: {
            description: "Create reusable code blocks! Functions make your code organized and powerful.",
            sections: [
              {
                type: "text",
                content: "**Functions** are reusable blocks of code. Define once, use anywhere! Great for damage, spawning, UI updates, and more."
              },
              {
                type: "heading",
                level: 2,
                content: "Creating Functions"
              },
              {
                type: "code",
                language: "lua",
                filename: "functions.lua",
                code: "-- Define a function\nlocal function sayHello()\n    print(\"Hello, Roblox!\")\nend\n\n-- Call the function\nsayHello()  -- Prints: Hello, Roblox!\nsayHello()  -- Prints it again!"
              },
              {
                type: "heading",
                level: 2,
                content: "Functions with Parameters"
              },
              {
                type: "code",
                language: "lua",
                filename: "parameters.lua",
                code: "-- Function with one parameter\nlocal function greet(playerName)\n    print(\"Welcome, \" .. playerName .. \"!\")\nend\n\ngreet(\"Steve\")   -- Welcome, Steve!\ngreet(\"Alex\")    -- Welcome, Alex!\n\n-- Function with multiple parameters\nlocal function addNumbers(a, b)\n    print(a + b)\nend\n\naddNumbers(5, 3)   -- 8\naddNumbers(10, 20) -- 30"
              },
              {
                type: "heading",
                level: 2,
                content: "Functions that Return Values"
              },
              {
                type: "code",
                language: "lua",
                filename: "return.lua",
                code: "-- Return a calculated value\nlocal function calculateDamage(baseDamage, multiplier)\n    return baseDamage * multiplier\nend\n\nlocal damage = calculateDamage(10, 2)\nprint(damage)  -- 20\n\n-- Use in expressions\nif calculateDamage(25, 1.5) > 30 then\n    print(\"Critical hit!\")\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Practical Example: Health System"
              },
              {
                type: "code",
                language: "lua",
                filename: "health_system.lua",
                code: "local health = 100\nlocal maxHealth = 100\n\nlocal function takeDamage(amount)\n    health = health - amount\n    print(\"Took \" .. amount .. \" damage! Health: \" .. health)\n    \n    if health <= 0 then\n        print(\"Game Over!\")\n    end\nend\n\nlocal function heal(amount)\n    health = health + amount\n    if health > maxHealth then\n        health = maxHealth\n    end\n    print(\"Healed! Health: \" .. health)\nend\n\ntakeDamage(30)  -- Health: 70\ntakeDamage(50)  -- Health: 20\nheal(40)        -- Health: 60"
              },
              {
                type: "tip",
                content: "Keep functions small and focused! A function called 'calculateDamage' should only calculate damage, not also update UI and play sounds."
              },
              {
                type: "checkpoint",
                content: "Create a function called 'calculateScore' that takes kills and coins as parameters and returns the total score (kills * 100 + coins * 10)."
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
          title: "Finding Objects",
          completed: false,
          content: {
            description: "Learn to find and reference any object in your game — parts, players, GUIs, and more!",
            sections: [
              {
                type: "text",
                content: "To control objects with code, you first need to **find** them! Learn the different ways to reference game objects."
              },
              {
                type: "heading",
                level: 2,
                content: "The Game Hierarchy"
              },
              {
                type: "code",
                language: "text",
                filename: "hierarchy.txt",
                code: "game\n├── Workspace         -- 3D objects (parts, models)\n├── Players           -- All players in the game\n├── ReplicatedStorage -- Shared assets\n├── ServerScriptService -- Server-only scripts\n├── StarterGui        -- UI for all players\n├── StarterPack       -- Tools given to players\n└── Lighting          -- Lighting and effects"
              },
              {
                type: "heading",
                level: 2,
                content: "Finding Objects"
              },
              {
                type: "code",
                language: "lua",
                filename: "finding.lua",
                code: "-- script.Parent - the object containing this script\nlocal part = script.Parent\n\n-- Direct path (if you know the structure)\nlocal door = game.Workspace.Door\nlocal coin = game.Workspace.Coins.GoldCoin\n\n-- FindFirstChild - safer, returns nil if not found\nlocal door = workspace:FindFirstChild(\"Door\")\nif door then\n    print(\"Found the door!\")\nend\n\n-- WaitForChild - waits until object exists (for loading)\nlocal player = game.Players:WaitForChild(\"Steve\")"
              },
              {
                type: "heading",
                level: 2,
                content: "Common Shortcuts"
              },
              {
                type: "code",
                language: "lua",
                filename: "shortcuts.lua",
                code: "-- These are the same:\ngame.Workspace\nworkspace\n\n-- Get all children\nlocal allParts = workspace:GetChildren()\nfor _, part in pairs(allParts) do\n    print(part.Name)\nend\n\n-- Get descendants (children of children too)\nlocal everything = workspace:GetDescendants()"
              },
              {
                type: "warning",
                content: "Use WaitForChild() when finding objects that might not exist yet (like player characters). FindFirstChild returns nil instantly if not found!"
              },
              {
                type: "heading",
                level: 2,
                content: "Finding Players"
              },
              {
                type: "code",
                language: "lua",
                filename: "players.lua",
                code: "-- Get the Players service\nlocal Players = game:GetService(\"Players\")\n\n-- Get a specific player\nlocal player = Players:FindFirstChild(\"Steve\")\n\n-- Get all current players\nfor _, player in pairs(Players:GetPlayers()) do\n    print(player.Name .. \" is playing!\")\nend\n\n-- Get local player (client scripts only!)\nlocal localPlayer = Players.LocalPlayer"
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
                explanation: "FindFirstChild returns nil if the object isn't found. This is why you should check 'if object then' before using it!"
              }
            ]
          }
        },
        {
          id: "3-2",
          title: "Events & Connections",
          completed: false,
          content: {
            description: "React to game events! Know when parts are touched, players join, or buttons are clicked.",
            sections: [
              {
                type: "text",
                content: "**Events** tell your code when something happens. Touch a part? Event! Player joins? Event! Click a button? Event!"
              },
              {
                type: "heading",
                level: 2,
                content: "Connecting to Events"
              },
              {
                type: "code",
                language: "lua",
                filename: "events_basic.lua",
                code: "local part = script.Parent\n\n-- When the part is touched...\npart.Touched:Connect(function(hit)\n    print(\"Something touched the part!\")\n    print(\"It was: \" .. hit.Name)\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Common Events"
              },
              {
                type: "code",
                language: "lua",
                filename: "common_events.lua",
                code: "-- Part touched\npart.Touched:Connect(function(hit) end)\n\n-- Part stopped being touched\npart.TouchEnded:Connect(function(hit) end)\n\n-- Player joined the game\ngame.Players.PlayerAdded:Connect(function(player) end)\n\n-- Player left the game\ngame.Players.PlayerRemoving:Connect(function(player) end)\n\n-- Mouse click on part (requires ClickDetector)\nclickDetector.MouseClick:Connect(function(player) end)"
              },
              {
                type: "heading",
                level: 2,
                content: "Touch to Kill"
              },
              {
                type: "code",
                language: "lua",
                filename: "kill_brick.lua",
                code: "local killPart = script.Parent\n\nkillPart.Touched:Connect(function(hit)\n    -- Check if a player touched it\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    \n    if humanoid then\n        humanoid.Health = 0  -- Kill the player!\n        print(hit.Parent.Name .. \" died!\")\n    end\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Click Detector"
              },
              {
                type: "code",
                language: "lua",
                filename: "click_detector.lua",
                code: "-- Add a ClickDetector to your part first!\nlocal part = script.Parent\nlocal clickDetector = part:FindFirstChild(\"ClickDetector\")\n\nclickDetector.MouseClick:Connect(function(player)\n    print(player.Name .. \" clicked the part!\")\n    part.BrickColor = BrickColor.Random()\nend)"
              },
              {
                type: "tip",
                content: "The 'hit' parameter in Touched events is the part that touched, not the player! Use hit.Parent to get the character, then find the Humanoid."
              },
              {
                type: "heading",
                level: 2,
                content: "Debounce (Prevent Spam)"
              },
              {
                type: "code",
                language: "lua",
                filename: "debounce.lua",
                code: "local part = script.Parent\nlocal debounce = false  -- Prevents multiple triggers\n\npart.Touched:Connect(function(hit)\n    if debounce then return end  -- Already running, stop!\n    \n    debounce = true  -- Lock\n    \n    print(\"Touched!\")\n    -- Do your thing here...\n    \n    wait(1)  -- Cooldown time\n    debounce = false  -- Unlock\nend)"
              },
              {
                type: "checkpoint",
                content: "Create a part that changes to a random color when clicked, but only allows clicking once per second (use debounce!)."
              }
            ]
          }
        },
        {
          id: "3-3",
          title: "Player Events",
          completed: false,
          content: {
            description: "React when players join, leave, spawn, and die. Essential for any multiplayer game!",
            sections: [
              {
                type: "text",
                content: "Player events let you set up players when they join, save data when they leave, and respond to deaths and respawns!"
              },
              {
                type: "heading",
                level: 2,
                content: "Player Joined"
              },
              {
                type: "code",
                language: "lua",
                filename: "player_joined.lua",
                code: "local Players = game:GetService(\"Players\")\n\nPlayers.PlayerAdded:Connect(function(player)\n    print(player.Name .. \" joined the game!\")\n    \n    -- Give starting items, load data, etc.\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Player Left"
              },
              {
                type: "code",
                language: "lua",
                filename: "player_left.lua",
                code: "local Players = game:GetService(\"Players\")\n\nPlayers.PlayerRemoving:Connect(function(player)\n    print(player.Name .. \" left the game!\")\n    \n    -- Save their data here!\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Character Spawned"
              },
              {
                type: "code",
                language: "lua",
                filename: "character_added.lua",
                code: "local Players = game:GetService(\"Players\")\n\nPlayers.PlayerAdded:Connect(function(player)\n    -- Wait for character to spawn\n    player.CharacterAdded:Connect(function(character)\n        print(player.Name .. \"'s character spawned!\")\n        \n        local humanoid = character:WaitForChild(\"Humanoid\")\n        \n        -- Customize: speed, jump, health\n        humanoid.WalkSpeed = 20      -- Default is 16\n        humanoid.JumpPower = 75      -- Default is 50\n        humanoid.MaxHealth = 200\n        humanoid.Health = 200\n    end)\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Player Died"
              },
              {
                type: "code",
                language: "lua",
                filename: "player_died.lua",
                code: "local Players = game:GetService(\"Players\")\n\nPlayers.PlayerAdded:Connect(function(player)\n    player.CharacterAdded:Connect(function(character)\n        local humanoid = character:WaitForChild(\"Humanoid\")\n        \n        humanoid.Died:Connect(function()\n            print(player.Name .. \" died!\")\n            -- Subtract a life, show death screen, etc.\n        end)\n    end)\nend)"
              },
              {
                type: "tip",
                content: "Put player event scripts in ServerScriptService! They need to run on the server to work for all players."
              },
              {
                type: "heading",
                level: 2,
                content: "Complete Player Setup"
              },
              {
                type: "code",
                language: "lua",
                filename: "player_setup.lua",
                code: "local Players = game:GetService(\"Players\")\n\nlocal function onPlayerAdded(player)\n    print(player.Name .. \" joined!\")\n    \n    -- When their character spawns\n    player.CharacterAdded:Connect(function(character)\n        local humanoid = character:WaitForChild(\"Humanoid\")\n        \n        -- Set stats\n        humanoid.WalkSpeed = 20\n        \n        -- When they die\n        humanoid.Died:Connect(function()\n            print(player.Name .. \" died!\")\n            wait(3)\n            player:LoadCharacter()  -- Respawn!\n        end)\n    end)\nend\n\nPlayers.PlayerAdded:Connect(onPlayerAdded)"
              },
              {
                type: "quiz",
                question: "Where should you put server scripts that handle player events?",
                options: [
                  { id: "a", text: "Workspace" },
                  { id: "b", text: "StarterGui" },
                  { id: "c", text: "ServerScriptService" },
                  { id: "d", text: "ReplicatedStorage" }
                ],
                correct: "c",
                explanation: "ServerScriptService is for scripts that run on the server. Player join/leave events need to be handled by the server to work for everyone!"
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
          title: "Coin Collection System",
          completed: false,
          content: {
            description: "Build a complete coin collection system with scoring and respawning coins!",
            sections: [
              {
                type: "text",
                content: "Let's build a coin collection system! Players touch coins, score goes up, coins respawn. A classic game mechanic! 💰"
              },
              {
                type: "heading",
                level: 2,
                content: "Step 1: Create the Coin"
              },
              {
                type: "code",
                language: "text",
                filename: "create_coin.txt",
                code: "1. Create a Cylinder part\n2. Rotate it (lay flat like a coin)\n3. Scale it small\n4. Color it yellow/gold\n5. Material: Neon (glowing!)\n6. Name it 'Coin'\n7. UNCHECK Anchored (we'll anchor in code)\n8. Add a Script inside it"
              },
              {
                type: "heading",
                level: 2,
                content: "Step 2: Coin Script"
              },
              {
                type: "code",
                language: "lua",
                filename: "coin_script.lua",
                code: "local coin = script.Parent\nlocal debounce = false\n\ncoin.Touched:Connect(function(hit)\n    if debounce then return end\n    \n    -- Check if player touched it\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if not humanoid then return end\n    \n    debounce = true\n    \n    -- Get the player\n    local player = game.Players:GetPlayerFromCharacter(hit.Parent)\n    \n    -- Add score (we'll create this next)\n    local leaderstats = player:FindFirstChild(\"leaderstats\")\n    if leaderstats then\n        leaderstats.Coins.Value += 1\n    end\n    \n    -- Hide coin\n    coin.Transparency = 1\n    coin.CanCollide = false\n    \n    -- Respawn after 5 seconds\n    wait(5)\n    coin.Transparency = 0\n    coin.CanCollide = true\n    debounce = false\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Step 3: Leaderstats (Score Display)"
              },
              {
                type: "code",
                language: "lua",
                filename: "leaderstats.lua",
                code: "-- Put this in ServerScriptService!\nlocal Players = game:GetService(\"Players\")\n\nPlayers.PlayerAdded:Connect(function(player)\n    -- Create leaderstats folder\n    local leaderstats = Instance.new(\"Folder\")\n    leaderstats.Name = \"leaderstats\"\n    leaderstats.Parent = player\n    \n    -- Create Coins value\n    local coins = Instance.new(\"IntValue\")\n    coins.Name = \"Coins\"\n    coins.Value = 0\n    coins.Parent = leaderstats\nend)\n\n-- Leaderstats automatically show on the leaderboard!"
              },
              {
                type: "tip",
                content: "The folder MUST be named exactly 'leaderstats' (lowercase!) for Roblox to show it on the leaderboard automatically."
              },
              {
                type: "heading",
                level: 2,
                content: "Step 4: Add Sound Effect"
              },
              {
                type: "code",
                language: "lua",
                filename: "coin_with_sound.lua",
                code: "-- Add a Sound object inside the coin\n-- Set its SoundId to a coin sound\n\nlocal coin = script.Parent\nlocal sound = coin:FindFirstChild(\"CollectSound\")\n\ncoin.Touched:Connect(function(hit)\n    -- ... (existing code)\n    \n    -- Play sound when collected\n    if sound then\n        sound:Play()\n    end\n    \n    -- ... (rest of code)\nend)"
              },
              {
                type: "checkpoint",
                content: "Build the complete coin system! Create 5+ coins around your map, add the leaderstats script, and test that the score increases."
              }
            ]
          }
        },
        {
          id: "4-2",
          title: "Checkpoint System",
          completed: false,
          content: {
            description: "Create checkpoints for an obby! Players respawn at the last checkpoint they touched.",
            sections: [
              {
                type: "text",
                content: "Checkpoints save player progress in obbies. Touch a checkpoint, and when you die, you respawn there instead of the start!"
              },
              {
                type: "heading",
                level: 2,
                content: "Step 1: Create Checkpoint"
              },
              {
                type: "code",
                language: "text",
                filename: "create_checkpoint.txt",
                code: "1. Create a Part (platform size)\n2. Color it green\n3. Name it 'Checkpoint1', 'Checkpoint2', etc.\n4. Add a SpawnLocation on top of it\n5. Set SpawnLocation.Neutral = false\n6. Set SpawnLocation.TeamColor to match\n7. Add a Script inside the checkpoint"
              },
              {
                type: "heading",
                level: 2,
                content: "Step 2: Checkpoint Script"
              },
              {
                type: "code",
                language: "lua",
                filename: "checkpoint.lua",
                code: "local checkpoint = script.Parent\nlocal checkpointNumber = 1  -- Change for each checkpoint!\n\ncheckpoint.Touched:Connect(function(hit)\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if not humanoid then return end\n    \n    local player = game.Players:GetPlayerFromCharacter(hit.Parent)\n    if not player then return end\n    \n    -- Get their current checkpoint\n    local leaderstats = player:FindFirstChild(\"leaderstats\")\n    local stage = leaderstats and leaderstats:FindFirstChild(\"Stage\")\n    \n    if stage and stage.Value < checkpointNumber then\n        stage.Value = checkpointNumber\n        print(player.Name .. \" reached checkpoint \" .. checkpointNumber)\n    end\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Step 3: Stage Leaderstats"
              },
              {
                type: "code",
                language: "lua",
                filename: "stage_leaderstats.lua",
                code: "-- In ServerScriptService\nlocal Players = game:GetService(\"Players\")\n\nPlayers.PlayerAdded:Connect(function(player)\n    local leaderstats = Instance.new(\"Folder\")\n    leaderstats.Name = \"leaderstats\"\n    leaderstats.Parent = player\n    \n    local stage = Instance.new(\"IntValue\")\n    stage.Name = \"Stage\"\n    stage.Value = 1  -- Start at stage 1\n    stage.Parent = leaderstats\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Step 4: Respawn at Checkpoint"
              },
              {
                type: "code",
                language: "lua",
                filename: "respawn_system.lua",
                code: "-- In ServerScriptService\nlocal Players = game:GetService(\"Players\")\n\nPlayers.PlayerAdded:Connect(function(player)\n    player.CharacterAdded:Connect(function(character)\n        wait()  -- Let character fully load\n        \n        local stage = player.leaderstats.Stage.Value\n        local checkpoint = workspace.Checkpoints:FindFirstChild(\"Checkpoint\" .. stage)\n        \n        if checkpoint then\n            -- Move character to checkpoint\n            local hrp = character:WaitForChild(\"HumanoidRootPart\")\n            hrp.CFrame = checkpoint.CFrame + Vector3.new(0, 5, 0)\n        end\n    end)\nend)"
              },
              {
                type: "tip",
                content: "Organize checkpoints in a folder called 'Checkpoints' in Workspace. Name them Checkpoint1, Checkpoint2, etc. for easy finding!"
              },
              {
                type: "quiz",
                question: "Why do we check if stage.Value < checkpointNumber?",
                options: [
                  { id: "a", text: "To make the game harder" },
                  { id: "b", text: "To prevent going backwards to earlier checkpoints" },
                  { id: "c", text: "To count total checkpoints" },
                  { id: "d", text: "No reason, it's optional" }
                ],
                correct: "b",
                explanation: "We only update if the new checkpoint is higher than their current one. This prevents players from losing progress by touching earlier checkpoints!"
              }
            ]
          }
        },
        {
          id: "4-3",
          title: "Kill Bricks & Traps",
          completed: false,
          content: {
            description: "Create dangerous obstacles! Kill bricks, lava, spikes, and moving traps.",
            sections: [
              {
                type: "text",
                content: "Every obby needs danger! Let's create kill bricks, lava zones, and moving traps. ☠️"
              },
              {
                type: "heading",
                level: 2,
                content: "Basic Kill Brick"
              },
              {
                type: "code",
                language: "lua",
                filename: "kill_brick.lua",
                code: "local killPart = script.Parent\n\nkillPart.Touched:Connect(function(hit)\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if humanoid then\n        humanoid.Health = 0\n    end\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Damage Over Time (Lava)"
              },
              {
                type: "code",
                language: "lua",
                filename: "lava.lua",
                code: "local lava = script.Parent\nlocal damagePerSecond = 25\nlocal touchingPlayers = {}\n\nlava.Touched:Connect(function(hit)\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if humanoid and not touchingPlayers[humanoid] then\n        touchingPlayers[humanoid] = true\n        \n        -- Damage while touching\n        while touchingPlayers[humanoid] and humanoid.Health > 0 do\n            humanoid:TakeDamage(damagePerSecond)\n            wait(1)\n        end\n    end\nend)\n\nlava.TouchEnded:Connect(function(hit)\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if humanoid then\n        touchingPlayers[humanoid] = nil\n    end\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Moving Kill Brick"
              },
              {
                type: "code",
                language: "lua",
                filename: "moving_trap.lua",
                code: "local trap = script.Parent\nlocal startPos = trap.Position\nlocal endPos = startPos + Vector3.new(20, 0, 0)  -- Move 20 studs right\nlocal speed = 3  -- Seconds per trip\n\n-- Kill on touch\ntrap.Touched:Connect(function(hit)\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if humanoid then\n        humanoid.Health = 0\n    end\nend)\n\n-- Move back and forth\nlocal TweenService = game:GetService(\"TweenService\")\n\nwhile true do\n    local tween1 = TweenService:Create(trap, TweenInfo.new(speed), {Position = endPos})\n    tween1:Play()\n    tween1.Completed:Wait()\n    \n    local tween2 = TweenService:Create(trap, TweenInfo.new(speed), {Position = startPos})\n    tween2:Play()\n    tween2.Completed:Wait()\nend"
              },
              {
                type: "heading",
                level: 2,
                content: "Spinning Blade"
              },
              {
                type: "code",
                language: "lua",
                filename: "spinning_blade.lua",
                code: "local blade = script.Parent\n\n-- Kill on touch\nblade.Touched:Connect(function(hit)\n    local humanoid = hit.Parent:FindFirstChild(\"Humanoid\")\n    if humanoid then\n        humanoid.Health = 0\n    end\nend)\n\n-- Spin forever\nwhile true do\n    blade.CFrame = blade.CFrame * CFrame.Angles(0, math.rad(5), 0)\n    wait(0.01)\nend"
              },
              {
                type: "tip",
                content: "Use TweenService for smooth movement! It's better than changing Position directly because it handles physics properly."
              },
              {
                type: "checkpoint",
                content: "Create an obstacle course with: 1 kill brick, 1 lava section, and 1 moving trap. Test that they all kill the player!"
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
          title: "Creating GUIs",
          completed: false,
          content: {
            description: "Build user interfaces! Health bars, menus, buttons, and text displays.",
            sections: [
              {
                type: "text",
                content: "**GUIs** (Graphical User Interfaces) are the 2D elements on screen — menus, health bars, buttons, and text. Let's learn to create them!"
              },
              {
                type: "heading",
                level: 2,
                content: "GUI Hierarchy"
              },
              {
                type: "code",
                language: "text",
                filename: "gui_structure.txt",
                code: "StarterGui\n└── ScreenGui\n    ├── Frame (container)\n    │   ├── TextLabel (displays text)\n    │   ├── TextButton (clickable text)\n    │   └── ImageLabel (displays image)\n    └── TextBox (text input)"
              },
              {
                type: "heading",
                level: 2,
                content: "Creating a Basic GUI"
              },
              {
                type: "code",
                language: "text",
                filename: "create_gui.txt",
                code: "1. In Explorer, click StarterGui\n2. Add a ScreenGui\n3. Inside ScreenGui, add a Frame\n4. Inside Frame, add TextLabel\n\nIMPORTANT Properties:\n• Position — Where on screen (uses Scale: 0-1)\n• Size — How big (uses Scale and Offset)\n• AnchorPoint — Pivot point (0.5, 0.5 = center)\n• BackgroundColor3 — Background color\n• BackgroundTransparency — 0=solid, 1=invisible"
              },
              {
                type: "heading",
                level: 2,
                content: "Positioning GUIs"
              },
              {
                type: "code",
                language: "text",
                filename: "positioning.txt",
                code: "Position and Size use UDim2:\nUDim2.new(ScaleX, OffsetX, ScaleY, OffsetY)\n\nScale: 0-1 (percentage of screen)\nOffset: Exact pixels\n\nExamples:\n• Center: Position = (0.5, 0, 0.5, 0), AnchorPoint = (0.5, 0.5)\n• Top-left: Position = (0, 10, 0, 10)  -- 10px from corner\n• Bottom: Position = (0.5, 0, 1, -50) -- centered, 50px from bottom"
              },
              {
                type: "heading",
                level: 2,
                content: "Score Display GUI"
              },
              {
                type: "code",
                language: "lua",
                filename: "score_gui.lua",
                code: "-- LocalScript inside a TextLabel in StarterGui\nlocal player = game.Players.LocalPlayer\nlocal label = script.Parent\n\n-- Wait for leaderstats\nlocal leaderstats = player:WaitForChild(\"leaderstats\")\nlocal coins = leaderstats:WaitForChild(\"Coins\")\n\n-- Update label when coins change\nlocal function updateDisplay()\n    label.Text = \"Coins: \" .. coins.Value\nend\n\ncoins.Changed:Connect(updateDisplay)\nupdateDisplay()  -- Initial update"
              },
              {
                type: "tip",
                content: "GUIs use LocalScripts (not Scripts) because they run on the player's device. Put LocalScripts inside the GUI elements!"
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
                explanation: "Scale 0.5 = 50% of the way across. With AnchorPoint at center, this positions the GUI perfectly in the center of the screen!"
              }
            ]
          }
        },
        {
          id: "5-2",
          title: "Buttons & Interactions",
          completed: false,
          content: {
            description: "Make clickable buttons! Create menus, shops, and interactive UI elements.",
            sections: [
              {
                type: "text",
                content: "**TextButtons** and **ImageButtons** let players interact with your UI. Click to buy, click to play, click to close!"
              },
              {
                type: "heading",
                level: 2,
                content: "Button Events"
              },
              {
                type: "code",
                language: "lua",
                filename: "button_events.lua",
                code: "local button = script.Parent\n\n-- When clicked\nbutton.MouseButton1Click:Connect(function()\n    print(\"Button clicked!\")\nend)\n\n-- When mouse hovers over\nbutton.MouseEnter:Connect(function()\n    button.BackgroundColor3 = Color3.fromRGB(100, 100, 100)\nend)\n\n-- When mouse leaves\nbutton.MouseLeave:Connect(function()\n    button.BackgroundColor3 = Color3.fromRGB(50, 50, 50)\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Play Button Example"
              },
              {
                type: "code",
                language: "lua",
                filename: "play_button.lua",
                code: "-- LocalScript in a TextButton\nlocal button = script.Parent\nlocal menu = button.Parent  -- The menu frame\n\nbutton.MouseButton1Click:Connect(function()\n    -- Hide the menu\n    menu.Visible = false\n    \n    -- Could also tell server to start game:\n    -- game.ReplicatedStorage.StartGame:FireServer()\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Shop Button"
              },
              {
                type: "code",
                language: "lua",
                filename: "shop_button.lua",
                code: "local button = script.Parent\nlocal player = game.Players.LocalPlayer\nlocal itemCost = 50\n\nbutton.MouseButton1Click:Connect(function()\n    local coins = player.leaderstats.Coins\n    \n    if coins.Value >= itemCost then\n        -- Tell server to process purchase\n        game.ReplicatedStorage.BuyItem:FireServer(\"Sword\")\n        button.Text = \"Purchased!\"\n    else\n        button.Text = \"Not enough coins!\"\n        wait(2)\n        button.Text = \"Buy Sword - 50 coins\"\n    end\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Toggle Button"
              },
              {
                type: "code",
                language: "lua",
                filename: "toggle_button.lua",
                code: "local button = script.Parent\nlocal isOn = false\n\nbutton.MouseButton1Click:Connect(function()\n    isOn = not isOn  -- Flip the value\n    \n    if isOn then\n        button.Text = \"Music: ON\"\n        button.BackgroundColor3 = Color3.fromRGB(0, 200, 0)\n        -- Play music\n    else\n        button.Text = \"Music: OFF\"\n        button.BackgroundColor3 = Color3.fromRGB(200, 0, 0)\n        -- Stop music\n    end\nend)"
              },
              {
                type: "tip",
                content: "Always give feedback when buttons are clicked! Change color, show text, play a sound — let players know their click worked."
              },
              {
                type: "checkpoint",
                content: "Create a simple menu with a 'Play' button that hides the menu when clicked, and a 'Settings' button that toggles a settings panel."
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
          title: "RemoteEvents",
          completed: false,
          content: {
            description: "Make client and server talk to each other! Essential for multiplayer games.",
            sections: [
              {
                type: "text",
                content: "**RemoteEvents** let the client (player's screen) and server (game logic) communicate. The server handles important stuff to prevent cheating!"
              },
              {
                type: "heading",
                level: 2,
                content: "Client vs Server"
              },
              {
                type: "code",
                language: "text",
                filename: "client_server.txt",
                code: "CLIENT (LocalScript):\n• Runs on player's device\n• Handles GUI, camera, input\n• Can be hacked! Don't trust it!\n\nSERVER (Script):\n• Runs on Roblox servers\n• Handles game logic, data, spawning\n• Secure! Can't be cheated.\n\nRule: NEVER trust the client with important data!\nAlways verify on the server."
              },
              {
                type: "heading",
                level: 2,
                content: "Creating RemoteEvents"
              },
              {
                type: "code",
                language: "text",
                filename: "create_remote.txt",
                code: "1. In Explorer, click ReplicatedStorage\n2. Add a RemoteEvent\n3. Name it something useful like 'BuyItem'\n\nRemoteEvents go in ReplicatedStorage so both\nclient and server can access them!"
              },
              {
                type: "heading",
                level: 2,
                content: "Client to Server"
              },
              {
                type: "code",
                language: "lua",
                filename: "client_to_server.lua",
                code: "-- CLIENT (LocalScript in StarterGui)\nlocal remote = game.ReplicatedStorage:WaitForChild(\"BuyItem\")\nlocal button = script.Parent\n\nbutton.MouseButton1Click:Connect(function()\n    remote:FireServer(\"Sword\", 50)  -- Send to server\nend)\n\n-- SERVER (Script in ServerScriptService)\nlocal remote = game.ReplicatedStorage:WaitForChild(\"BuyItem\")\n\nremote.OnServerEvent:Connect(function(player, itemName, cost)\n    print(player.Name .. \" wants to buy \" .. itemName)\n    \n    -- Verify they have enough coins (don't trust client!)\n    local coins = player.leaderstats.Coins\n    if coins.Value >= cost then\n        coins.Value -= cost\n        -- Give item...\n        print(\"Purchase successful!\")\n    end\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Server to Client"
              },
              {
                type: "code",
                language: "lua",
                filename: "server_to_client.lua",
                code: "-- SERVER (Script in ServerScriptService)\nlocal remote = game.ReplicatedStorage:WaitForChild(\"ShowMessage\")\n\n-- Send to one player\nremote:FireClient(player, \"You won!\")\n\n-- Send to ALL players\nremote:FireAllClients(\"Round starting!\")\n\n-- CLIENT (LocalScript in StarterGui)\nlocal remote = game.ReplicatedStorage:WaitForChild(\"ShowMessage\")\n\nremote.OnClientEvent:Connect(function(message)\n    script.Parent.Text = message\nend)"
              },
              {
                type: "warning",
                content: "NEVER trust data from FireServer! Hackers can send anything. Always verify on the server that the action is valid."
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
                explanation: "Players can hack their client (LocalScripts), but they can't hack the server. Put important logic server-side to prevent cheating!"
              }
            ]
          }
        },
        {
          id: "6-2",
          title: "Saving Player Data",
          completed: false,
          content: {
            description: "Save player progress! Coins, levels, and inventory persist between sessions.",
            sections: [
              {
                type: "text",
                content: "**DataStores** save player data to Roblox's cloud. When players return, their progress is still there!"
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
                code: "1. Go to Game Settings (in Roblox Studio)\n2. Click Security\n3. Enable 'Enable Studio Access to API Services'\n4. Publish your game first if you haven't!\n\nDataStores only work in published games."
              },
              {
                type: "heading",
                level: 2,
                content: "Basic DataStore"
              },
              {
                type: "code",
                language: "lua",
                filename: "datastore_basic.lua",
                code: "-- Script in ServerScriptService\nlocal DataStoreService = game:GetService(\"DataStoreService\")\nlocal playerData = DataStoreService:GetDataStore(\"PlayerData\")\nlocal Players = game:GetService(\"Players\")\n\nPlayers.PlayerAdded:Connect(function(player)\n    -- Create leaderstats\n    local leaderstats = Instance.new(\"Folder\")\n    leaderstats.Name = \"leaderstats\"\n    leaderstats.Parent = player\n    \n    local coins = Instance.new(\"IntValue\")\n    coins.Name = \"Coins\"\n    coins.Parent = leaderstats\n    \n    -- Load saved data\n    local success, data = pcall(function()\n        return playerData:GetAsync(player.UserId)\n    end)\n    \n    if success and data then\n        coins.Value = data.Coins or 0\n        print(\"Loaded \" .. player.Name .. \"'s data!\")\n    else\n        coins.Value = 0\n        print(\"New player or load failed\")\n    end\nend)"
              },
              {
                type: "heading",
                level: 2,
                content: "Saving Data"
              },
              {
                type: "code",
                language: "lua",
                filename: "save_data.lua",
                code: "-- Add this to the same script\n\nPlayers.PlayerRemoving:Connect(function(player)\n    local leaderstats = player:FindFirstChild(\"leaderstats\")\n    if not leaderstats then return end\n    \n    local data = {\n        Coins = leaderstats.Coins.Value\n    }\n    \n    local success, err = pcall(function()\n        playerData:SetAsync(player.UserId, data)\n    end)\n    \n    if success then\n        print(\"Saved \" .. player.Name .. \"'s data!\")\n    else\n        warn(\"Failed to save: \" .. err)\n    end\nend)\n\n-- Also save when game closes\ngame:BindToClose(function()\n    for _, player in pairs(Players:GetPlayers()) do\n        -- Same save code for each player\n    end\nend)"
              },
              {
                type: "tip",
                content: "Always use pcall() with DataStores! They can fail due to network issues. pcall catches errors so your game doesn't crash."
              },
              {
                type: "warning",
                content: "DataStores have rate limits! Don't save too often. Save when players leave, not every time they collect a coin."
              },
              {
                type: "checkpoint",
                content: "Implement data saving for your coin system. Test by collecting coins, leaving, and rejoining to see if your coins saved!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 7,
      title: "Publishing Your Game",
      lessons: [
        {
          id: "7-1",
          title: "Polish & Publish",
          completed: false,
          content: {
            description: "Get your game ready for players! Test, polish, and publish to Roblox.",
            sections: [
              {
                type: "text",
                content: "Your game is almost ready! Let's polish it up and publish it for the world to play! 🌍"
              },
              {
                type: "heading",
                level: 2,
                content: "Pre-Launch Checklist"
              },
              {
                type: "list",
                items: [
                  "✅ Test EVERYTHING — play through your entire game",
                  "✅ Fix any bugs you find",
                  "✅ Check for missing collisions (falling through floors)",
                  "✅ Make sure data saves properly",
                  "✅ Test on different devices if possible",
                  "✅ Add a spawn point",
                  "✅ Remove any test scripts/parts"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Game Settings"
              },
              {
                type: "code",
                language: "text",
                filename: "game_settings.txt",
                code: "Game Settings (File → Game Settings):\n\n• Name — Choose a catchy, descriptive name\n• Description — What's your game about?\n• Genre — Pick the closest match\n• Icon — 512x512 square image\n• Thumbnails — Screenshots/artwork\n• Max Players — How many can play?\n• Permissions — Who can edit?"
              },
              {
                type: "heading",
                level: 2,
                content: "Publishing"
              },
              {
                type: "code",
                language: "text",
                filename: "publish.txt",
                code: "1. File → Publish to Roblox\n2. Fill in name and description\n3. Click 'Create'\n4. Go to your game's page on roblox.com\n5. Click '...' → Configure this Place\n6. Set to 'Public' when ready!\n\nYour game now has a URL you can share!"
              },
              {
                type: "heading",
                level: 2,
                content: "Getting Players"
              },
              {
                type: "list",
                items: [
                  "📱 Share on social media",
                  "👥 Ask friends to play and invite others",
                  "🎮 Post in Roblox groups",
                  "📺 Make a trailer video",
                  "🔄 Update regularly to keep players coming back",
                  "👂 Listen to player feedback!"
                ]
              },
              {
                type: "tip",
                content: "First impressions matter! A good icon and thumbnail can get more people to click on your game."
              },
              {
                type: "text",
                content: "**Congratulations!** 🎉 You've learned Roblox game development! Keep building, keep learning, and who knows — your game might be the next big hit on Roblox!"
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
            description: "Amazing work! You've learned Roblox game development. Here's what's next!",
            sections: [
              {
                type: "text",
                content: "**CONGRATULATIONS!** 🎉 You're now a Roblox game developer! You have the skills to create and publish your own games!"
              },
              {
                type: "heading",
                level: 2,
                content: "What You Learned"
              },
              {
                type: "list",
                items: [
                  "✅ Roblox Studio interface and building",
                  "✅ Lua programming fundamentals",
                  "✅ Variables, if statements, and loops",
                  "✅ Functions and code organization",
                  "✅ Finding objects and using events",
                  "✅ Player events and game systems",
                  "✅ Coins, checkpoints, and kill bricks",
                  "✅ GUI creation and buttons",
                  "✅ Client-server communication",
                  "✅ Saving player data",
                  "✅ Publishing your game!"
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
                  "🎮 **Build more games** — Practice makes perfect!",
                  "🔧 **Learn advanced topics** — Animations, vehicles, AI",
                  "💰 **Monetization** — Game passes, dev products",
                  "🤝 **Join communities** — Roblox Dev Forum, Discord servers",
                  "📺 **Watch tutorials** — YouTube has tons of Roblox content",
                  "🎨 **Learn modeling** — Create custom assets in Blender"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Game Ideas to Try"
              },
              {
                type: "list",
                items: [
                  "🏃 Obby (obstacle course)",
                  "⚔️ Sword fighting game",
                  "🏠 Tycoon",
                  "🔫 Shooter",
                  "🎭 Roleplay game",
                  "🧟 Survival game",
                  "🏎️ Racing game",
                  "🧩 Puzzle game"
                ]
              },
              {
                type: "tip",
                content: "The best way to learn is to BUILD! Pick a game idea and start creating. You'll learn so much by doing!"
              },
              {
                type: "text",
                content: "You started knowing nothing about game development. Now you can create real games that millions of people could play. That's incredible! Keep building, keep dreaming, and have fun! 🚀🎮"
              }
            ]
          }
        }
      ]
    }
  ]
};
