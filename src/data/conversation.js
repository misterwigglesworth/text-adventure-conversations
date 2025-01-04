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
    text: `This seems to be a power outage scenario in a living room. It's dark and warm due to no electricity. I should:
    1. Try to understand what I can see/interact with
    2. Look for alternate light sources
    3. Figure out what happened with the power
    Let me start by looking around.`,
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
    text: `Ah, good - I can see several key items:
    1. A flashlight - that will be crucial for better visibility
    2. A maintenance notice on the clock - might explain the power situation
    3. Passages to kitchen and utility room - utility room might have circuit breakers
    Let me grab the flashlight first.`,
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
    text: `Now that I have the flashlight, I should:
    1. Turn it on to see better
    2. Check that maintenance notice - might explain what's going on
    3. After that, the utility room seems like a logical place to investigate`,
  },
  {
    type: "command",
    text: "use flashlight",
  },
  {
    type: "narration",
    text: `The flashlight doesn't have any batteries.`,
  },
  {
    type: "thinking",
    text: `Ah, that explains why it didn't work. I'll need to find batteries.
    Common places for batteries:
    - Kitchen drawers
    - Utility room
    - Entertainment centers/remotes
    Let me first check that maintenance notice on the clock - it might give me useful information.`,
  },
  {
    type: "command",
    text: "examine maintenance notice",
  },
  {
    type: "narration",
    text: `Notice reads: 'Recent electrical maintenance completed. -Building Services'`,
  },
  {
    type: "thinking",
    text: `Hmm, so there was recent electrical work done. This power outage might be related.
    Given that I need batteries and there might be electrical issues:
    1. The utility room would be a good place to check both for batteries and the circuit breaker
    2. Kitchen drawers are also a common place for batteries
    Let me try the utility room first since it might solve both problems.`,
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
    text: `Perfect - that grey panel is likely the circuit breaker panel.
    Since it's dark, I should:
    1. Look around carefully for any batteries first
    2. Then examine the circuit breaker panel`,
  },
  {
    type: "command",
    text: "look",
  },
  {
    type: "narration",
    text: `This cramped space serves as the house's mechanical heart. A large
    electrical panel dominates one wall, while a workbench runs along
    another. A doorway west leads back to the living room, and stairs
    descend to the basement.`,
  },
  {
    type: "thinking",
    text: `A workbench might have batteries or tools. Let me check that before examining the electrical panel.`,
  },
  {
    type: "command",
    text: "examine workbench",
  },
  {
    type: "narration",
    text: `The workbench is cluttered with maintenance supplies and tools.
    You notice some wiring diagrams and a troubleshooting manual.`,
  },
  {
    type: "thinking",
    text: `The presence of wiring diagrams and a manual could be helpful. Let me:
    1. Check the manual first - might have info about the electrical system
    2. Then examine the electrical panel`,
  },
  {
    type: "command",
    text: "examine troubleshooting manual",
  },
  {
    type: "narration",
    text: `The manual describes the inner workings of the water heater`,
  },
  {
    type: "thinking",
    text: `Not what I was hoping for - it's about the water heater, not the electrical system.
    Let me check the electrical panel now, since that's the most likely source of our power problems.`,
  },
  {
    type: "command",
    text: "examine electrical panel",
  },
  {
    type: "narration",
    text: `Opening the panel reveals rows of circuit breakers. One of them
    is in the OFF position, but it won't stay flipped. There's a note
    about the 'main power' being in the basement.`,
  },
  {
    type: "thinking",
    text: `Aha! Two important pieces of information:
    1. There's a tripped breaker that won't reset - could indicate a serious electrical issue
    2. The main power control is in the basement
    Since the breaker won't stay flipped, I need to check the main power in the basement.`,
  },
  {
    type: "command",
    text: "go down",
  },
  {
    type: "narration",
    text: `It's too dark to go that way without a light source.`,
  },
  {
    type: "thinking",
    text: `Right - I still need batteries for the flashlight before I can safely go to the basement.
    Let me try the kitchen for batteries, since that's a common place to store them.`,
  },
  {
    type: "command",
    text: "go west",
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
    text: `Most kitchens keep useful items like batteries in drawers. Let me look around carefully.`,
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
    text: `Let me check the drawers - that's typically where people store batteries, along with other household items.`,
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
    text: `Perfect! Found the batteries. Let me:
    1. Take them
    2. Then try to use them with the flashlight
    3. After that, I can safely check the basement`,
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
    type: "thinking",
    text: `Now I need to put the batteries in the flashlight and turn it on.`,
  },
  {
    type: "command",
    text: "use batteries with flashlight",
  },
  {
    type: "narration",
    text: `You install the batteries in the flashlight. It's now ready to use.`,
  },
  {
    type: "thinking",
    text: `Great! Now that I have a working flashlight, I can:
    1. Go back to the utility room
    2. Go down to the basement to check the main power`,
  },
  {
    type: "command",
    text: "go south",
  },
  {
    type: "command",
    text: "go east",
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
    text: `The red glow is likely an emergency exit light or indicator.
    Now that I have a working flashlight, I should be able to see better.`,
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
    text: `Now I can properly look around the basement and try to find the main power control mentioned in the panel upstairs.`,
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
    text: `Perfect - I've found the main power panel. The external sensor box might also be relevant - could be related to the electrical system. Let me:
    1. First examine the main electrical panel
    2. Then check out that sensor box if needed`,
  },
  {
    type: "command",
    text: "examine switch",
  },
  {
    type: "narration",
    text: `This is clearly the main power disconnect. The switch is in the OFF position and appears to be locked.`,
  },
  {
    type: "thinking",
    text: `Ah, this explains everything - the main power is switched off and locked. This must be related to the maintenance work mentioned in the notice upstairs.
    Since it's locked, I should check that sensor box - it might give me more information about what's going on.`,
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
    text: `A tripped sensor with a reset button - this could be the root cause of our power issues. Let me:
    1. Try pressing the reset button
    2. Then check if we can unlock/restore the main power`,
  },
  {
    type: "command",
    text: "use sensor",
  },
  {
    type: "narration",
    text: `You press the reset button. The light changes from red to green.`,
  },
  {
    type: "thinking",
    text: `Great! The sensor is reset. Now that it's showing green instead of red:
    1. Let's check if the main power switch is still locked
    2. If it's unlocked now, we can try to turn it back on`,
  },
  {
    type: "command",
    text: "examine switch",
  },
  {
    type: "narration",
    text: `This is clearly the main power disconnect. The switch is in the OFF position.`,
  },
  {
    type: "thinking",
    text: `The switch description no longer mentions it being locked - that's progress! Now that the sensor is reset and the switch appears unlocked, I should be able to turn it back on.`,
  },
  {
    type: "command",
    text: "use switch",
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
    text: `Success! We solved the power outage by:
    1. Finding batteries for the flashlight
    2. Locating the main power control in the basement
    3. Resetting the tripped sensor
    4. Restoring the main power switch

    The maintenance notice upstairs makes more sense now - they must have been working on the electrical system and the sensor got tripped during the process.`,
  },
  {
    type: "narration",
    text: `Thank you! It's satisfying to hear those electronics humming again!`,
  },
];
