export const conversation = [
  {
    type: "narration",
    text: `You find yourself in a dark living room. The usual hum of electronics
    is notably absent. Without the air conditioning running, the room
    feels uncomfortably warm.
    
    Type 'help' for a list of commands.
    
    [Use <thinking></thinking> tags to write notes to yourself or
    think through anything you like.]`,
  },
  {
    type: "thinking",
    text: `I'm in a dark living room with no electronics humming and it's uncomfortably warm. Let me think this through...\n\nOkay, so the power is out, that's why it's dark and warm. I need to figure out what to do next. I should try to find a light source or a way to turn the power back on. Maybe there's a flashlight or a candle somewhere in the room. Or perhaps I can find a way to open a window to get some air circulating. I'll start by trying to feel my way around the room and see if I can find anything useful.\n\nFor now, I'll type 'help' to see what commands are available to me.`,
  },
  {
    type: "command",
    text: "help",
  },
  {
    type: "narration",
    text: `Available commands:\n\nlook (l): Look around the current room\ninventory (i): Check your inventory\nexamine (x) [object]: Look at something more closely\ntake [object]: Pick up an object\nuse [object] (with [object]): Use an object or combine items\ngo [direction]: Move in a direction (north, south, east, west, up, down)\nhelp (h): Show this help message\nquit: Exit the game`,
  },
  {
    type: "thinking",
    text: `Now that I have the list of available commands, I can start exploring the room. Since it's dark, I'll start by trying to get a better sense of my surroundings.`,
  },
  {
    type: "command",
    text: "look",
  },
  {
    type: "narration",
    text: `The room is quiet except for the sound of your movement. A digital
    clock on the entertainment center is dark, and a maintenance notice
    is stuck to its side. A flashlight sits on a side table.
    A family photo sits on the mantlepiece, barely visible in the dim light.
    Doorways lead north to the kitchen and east to the utility room.`,
  },
  {
    type: "thinking",
    text: `It sounds like I've got a few things to work with here. I've got a flashlight that could potentially provide some light, and a couple of doorways that lead to other rooms. I'm also curious about the maintenance notice on the digital clock.\n\nFirst things first, I should probably get some light going. That flashlight on the side table could be really useful. Once I've got some light, I can take a closer look at the maintenance notice and see if it gives me any clues about what's going on. After that, I can decide whether to head to the kitchen or the utility room.\n\nI'll start by taking the flashlight.`,
  },
  {
    type: "command",
    text: "take flashlight",
  },
  {
    type: "narration",
    text: `You take the flashlight.`,
  },
  {
    type: "thinking",
    text: `Now that I have the flashlight, I should try to turn it on and see if it works.`,
  },
  {
    type: "command",
    text: "use flashlight",
  },
  {
    type: "narration",
    text: `The flashlight needs batteries.`,
  },
  {
    type: "thinking",
    text: `It seems like the flashlight isn't going to be of much use without batteries.\n\nI'll have to keep an eye out for some batteries as I explore the house. Maybe I'll find some in the kitchen or the utility room. For now, I'll just have to put the flashlight back and try to navigate in the dark. Let me think about which room to head to first. The kitchen might have some candles or other light sources, but the utility room might have some information about the power outage or some tools that could be useful.\n\nI think I'll head to the kitchen first, see if I can find any light sources or other useful items.`,
  },
  {
    type: "command",
    text: "go north",
  },
  {
    type: "narration",
    text: `The kitchen is eerily quiet without the usual hum of appliances.
    Your footsteps echo slightly on the tile floor.`,
  },
  {
    type: "thinking",
    text: `The kitchen is just as dark and quiet as the living room.\n\nNow that I'm in the kitchen, I should try to feel my way around and see if I can find any candles, matches, or other light sources. Maybe there's a drawer or a cabinet that has some flashlights or batteries in it. I'll also keep an eye out for any other useful items, like a first aid kit or a phone.\n\nI'll start by trying to get a better sense of the layout of the kitchen.`,
  },
  {
    type: "command",
    text: "look",
  },
  {
    type: "narration",
    text: `A modern kitchen with standard appliances, all currently silent and dark.
    The drawers and cabinets look well-organized. A doorway south leads
    back to the living room.`,
  },
  {
    type: "thinking",
    text: `It sounds like a typical kitchen, but without the usual sounds and lights, it feels a bit eerie.\n\nSince the drawers and cabinets look well-organized, I might be able to find what I'm looking for without too much trouble. I'll start by checking the drawers and see if I can find any candles, matches, or flashlights. Maybe there's a junk drawer with some batteries in it, or a utility drawer with some other useful items.\n\nI'll start by examining the drawers.`,
  },
  {
    type: "command",
    text: "examine drawers",
  },
  {
    type: "narration",
    text: `The drawers contain typical kitchen items. In one drawer, you spot a package of batteries among the utensils.`,
  },
  {
    type: "thinking",
    text: `Batteries! That's exactly what I needed for the flashlight.\n\nNow that I've found the batteries, I can go back to the living room and try to use the flashlight. With a little light, I should be able to get a better sense of my surroundings and maybe find some other useful items. After that, I can decide whether to keep exploring the house or try to find a way to restore the power.\n\nI'll take the batteries and head back to the living room.`,
  },
  {
    type: "command",
    text: "take batteries",
  },
  {
    type: "narration",
    text: `You take the batteries.`,
  },
  {
    type: "command",
    text: "go south",
  },
  {
    type: "narration",
    text: `The room is quiet except for the sound of your movement. A digital
    clock on the entertainment center is dark, and a maintenance notice
    is stuck to its side. A flashlight sits on a side table.
    A family photo sits on the mantlepiece, barely visible in the dim light.
    Doorways lead north to the kitchen and east to the utility room.`,
  },
  {
    type: "thinking",
    text: `I'm back in the living room, and I've got the batteries I needed for the flashlight. Now I can try to use the flashlight to get some light.`,
  },
  {
    type: "command",
    text: "use flashlight with batteries",
  },
  {
    type: "narration",
    text: `You install the batteries in the flashlight. It's now ready to use.`,
  },
  {
    type: "thinking",
    text: `Now that the flashlight is ready, I'll turn it on and see if it works.`,
  },
  {
    type: "command",
    text: "use flashlight",
  },
  {
    type: "narration",
    text: `The flashlight illuminates the area.`,
  },
  {
    type: "thinking",
    text: `Finally, some light! Now that I can see, I'll take a closer look around the room.`,
  },
  {
    type: "command",
    text: "look",
  },
  {
    type: "narration",
    text: `The room is quiet except for the sound of your movement. A digital
    clock on the entertainment center is dark, and a maintenance notice
    is stuck to its side.
    A family photo sits on the mantlepiece, barely visible in the dim light.
    Doorways lead north to the kitchen and east to the utility room.`,
  },
  {
    type: "thinking",
    text: `Wait, I thought the flashlight would illuminate the room better than that. Let me try to shine the flashlight around the room to get a better look.\n\nI'll shine the flashlight around the room to get a better look. Ah, that's better. Now I can see the details of the room more clearly. With the flashlight, I can see that the maintenance notice on the digital clock is probably worth reading. And the family photo on the mantlepiece might be interesting to look at too.`,
  },
  {
    type: "command",
    text: "examine maintenance notice",
  },
  {
    type: "narration",
    text: `Notice reads: 'Recent electrical maintenance completed.'`,
  },
  {
    type: "thinking",
    text: `That's interesting. The notice says that recent electrical maintenance was completed, but the power is still out.\n\nThis suggests that the power outage might not be related to the maintenance, or maybe the maintenance didn't go as planned. I'll have to keep this in mind as I explore the house further. Maybe there's a problem with the electrical system that needs to be addressed.\n\nI'll take a closer look at the digital clock and the entertainment center to see if there are any other clues.`,
  },
  {
    type: "command",
    text: "examine digital clock and entertainment center",
  },
  {
    type: "narration",
    text: `The digital display on the clock shows no numbers at all. It seems lifeless.\nEverything on the entertainment centered is powered down. The clock that usually shows 12:00 is completely dark.`,
  },
  {
    type: "thinking",
    text: `The digital clock and the entertainment center are both completely dead, which suggests that the power outage is pretty extensive.\n\nI've explored the living room and the kitchen, and I haven't found any obvious clues about what's causing the power outage. Maybe it's time to check out the utility room and see if there are any clues there. The utility room might have some information about the electrical system or the maintenance that was done.\n\nI'll head to the utility room to see what I can find.`,
  },
  {
    type: "command",
    text: "go east",
  },
  {
    type: "narration",
    text: `You enter a narrow utility room. A large grey panel is mounted on
    one wall, barely visible in the dim light filtering in from the
    living room.`,
  },
  {
    type: "thinking",
    text: `The utility room. This is probably where I'll find the electrical panel and maybe some clues about the power outage.\n\nI'll shine my flashlight on the grey panel to get a better look.`,
  },
  {
    type: "command",
    text: "use flashlight on grey panel",
  },
  {
    type: "narration",
    text: `The flashlight illuminates the area.`,
  },
  {
    type: "thinking",
    text: `Now that the area is lit up, I can see the grey panel more clearly. It looks like it might be the main electrical panel for the house.\n\nI'll take a closer look at the panel and see if there are any signs of trouble or any clues about what's going on. Maybe there's a blown fuse or a tripped circuit breaker that's causing the power outage.\n\nI'll examine the panel more closely.`,
  },
  {
    type: "command",
    text: "examine grey panel",
  },
  {
    type: "narration",
    text: `Opening the panel reveals rows of circuit breakers. One of them
    is in the OFF position, but it won't stay flipped. There's a note
    about the 'main power' being in the basement.`,
  },
  {
    type: "thinking",
    text: `It looks like I've found a clue. The circuit breaker that's in the OFF position won't stay flipped, which suggests that there might be a problem with the electrical system.\n\nAnd the note about the "main power" being in the basement is interesting. It sounds like the basement might be where I'll find the main electrical panel or the source of the power outage.\n\nI'll need to head to the basement to investigate further. Maybe I'll find a way to restore the power or get a better understanding of what's going on. I'll have to be careful, though - if there's a problem with the electrical system, I don't want to get shocked or hurt.\n\nI'll head to the basement to see what I can find.`,
  },
  {
    type: "command",
    text: "go down",
  },
  {
    type: "narration",
    text: `The basement stairs lead down into thick darkness. You can barely
    make out anything except for a faint red glow from what might be
    emergency lighting.`,
  },
  {
    type: "thinking",
    text: `The basement stairs lead down into darkness, but I can see a faint red glow from what might be emergency lighting. That's a good sign - it means that there's some kind of backup power system in place.\n\nI'll carefully make my way down the stairs, using my flashlight to light the way and trying not to trip or fall.\n\n`,
  },
  {
    type: "command",
    text: "use flashlight to light the stairs",
  },
  {
    type: "command",
    text: "go down",
  },
  {
    type: "narration",
    text: `The flashlight illuminates the area.\nYou can't go down.`,
  },
  {
    type: "thinking",
    text: `It seems that I'm already at the bottom of the stairs, and the "go down" command isn't applicable.\n\nNow that I'm in the basement, I'll take a closer look around. The faint red glow I saw earlier is probably from some kind of emergency lighting, and I'd like to see where it's coming from and what it's illuminating.`,
  },
  {
    type: "command",
    text: "look",
  },
  {
    type: "narration",
    text: `Emergency backup lights cast dim red beams across the basement.
    The main electrical panel dominates the north wall, with a heavy
    switch prominently mounted. Near a small window well, you notice
    a small external sensor box.`,
  },
  {
    type: "thinking",
    text: `The emergency backup lights are casting a dim red glow over the basement, and I can see the main electrical panel on the north wall. That heavy switch looks like it might be important - maybe it's a master switch or a cutoff switch for the main power.\n\nAnd I've also noticed a small external sensor box near a small window well. That could be interesting - maybe it's related to the electrical system or the backup power.\n\nI'll take a closer look at the main electrical panel and that heavy switch. Maybe I can find a way to restore the power or get a better understanding of what's going on. And I'll also check out the sensor box - it might have some clues or information that can help me.\n\nI'll start by examining the main electrical panel and the heavy switch.`,
  },
  {
    type: "command",
    text: "examine main electrical panel and heavy switch",
  },
  {
    type: "narration",
    text: `This is clearly the main power disconnect. The switch is in the OFF position.`,
  },
  {
    type: "thinking",
    text: `So the main power disconnect switch is in the OFF position, which explains why the power is out.\n\nThis is probably the key to restoring the power. If I flip the switch to the ON position, it should restore the power to the house. But I'll make sure to check the sensor box and the rest of the area to make sure there aren't any other issues or warnings before I do that.\n\nI'll flip the switch to the ON position and see what happens.`,
  },
  {
    type: "command",
    text: "use heavy switch",
  },
  {
    type: "narration",
    text: `The switch seems to be locked.`,
  },
  {
    type: "thinking",
    text: `It seems that the switch is locked, which means I won't be able to flip it to the ON position without finding a way to unlock it.\n\nI'll need to search the area and see if I can find a key or a way to unlock the switch. Maybe there's a lockbox or a hidden compartment nearby that contains the key. Or maybe the sensor box has some information or a clue about how to unlock the switch.\n\nI'll examine the sensor box more closely to see if it has any information or clues.`,
  },
  {
    type: "command",
    text: "examine sensor box",
  },
  {
    type: "narration",
    text: `The sensor appears to be in a tripped state. There's a reset button.`,
  },
  {
    type: "thinking",
    text: `The sensor is in a tripped state, which might be related to the switch being locked. And there's a reset button, which could potentially reset the sensor and unlock the switch.\n\nI'll try pressing the reset button to see if it resets the sensor and unlocks the switch. This could be the key to restoring the power.\n\nI'll press the reset button.`,
  },
  {
    type: "command",
    text: "use sensor box reset button",
  },
  {
    type: "narration",
    text: `You press the reset button. The light changes from red to green.`,
  },
  {
    type: "thinking",
    text: `The reset button has been pressed, and the light on the sensor box has changed from red to green. This suggests that the sensor has been reset, and possibly the lock on the main power disconnect switch has been released.\n\nNow that the sensor has been reset, I'll try to flip the main power disconnect switch to the ON position and see if it restores the power.\n\nI'll try to use the heavy switch again.`,
  },
  {
    type: "command",
    text: "use heavy switch",
  },
  {
    type: "narration",
    text: `You flip the switch. Power is restored to the house!

Congratulations! You've restored power to the house!
The lights flicker on throughout the building, and the
familiar hum of electronics returns. Well done!`,
  },
  {
    type: "thinking",
    text: `I'm glad I was able to restore the power to the house. It was a bit of a challenge, but I was able to figure it out by exploring the house, finding clues, and using the items I found to overcome obstacles. Thanks for the game, it was a lot of fun! If you want to play again or try a different adventure, just let me know!`,
  },
];
