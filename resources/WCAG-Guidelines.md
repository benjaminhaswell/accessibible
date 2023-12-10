# WCAG Guidelines
You can learn more about each of these guidelines in the [WCAG Quickref](https://www.w3.org/WAI/WCAG22/quickref/)

## 1. Perceivable
### 1.1 Text Alternatives
- **1.1.1 Non-text Content**: Provide text alternatives for non-text content (charts, audio, animations, etc.).

### 1.2 Time-based Media
- **1.2.1 Audio-only and Video-only (Prerecorded)**: Include alternative ways, like transcripts, for users to access information in audio and video.
- **1.2.2 Captions (Prerecorded)**: Add captions to videos.
- **1.2.3 Audio Description or Media Alternative (Prerecorded)**: Provide audio descriptions for videos.
- **1.2.4 Captions (Live)**: Ensure real-time captions for live videos.
- **1.2.5 Audio Description (Prerecorded)**: Include audio descriptions of actions ("The dog runs away with the legendary artifact") for prerecorded media.
- **1.2.6 Sign Language (Prerecorded)**: Use sign language interpreters in prerecorded videos.
- **1.2.7 Extended Audio Description (Prerecorded)**: Offer extended audio descriptions for complex content.
- **1.2.8 Media Alternative (Prerecorded)**: Provide alternative media formats for users who may struggle with the default presentation.
- **1.2.9 Audio-only (Live)**: Ensure live audio content is accessible with captions or alternative formats.

### 1.3 Adaptable
- **1.3.1 Info and Relationships**: Ensure the structure and relationships between different elements on a page are conveyed to assistive technologies (programmatically).
- **1.3.2 Meaningful Sequence**: Make sure content is presented in a logical and meaningful order (top left to bottom right, like reading a book).
- **1.3.3 Sensory Characteristics**: Design content to be easily distinguishable by different senses (don't rely on shapes/colors to describe information).
- **1.3.4 Orientation**: Create content that can be presented in both portrait and landscape orientations.
- **1.3.5 Identify Input Purpose**: Clearly label and identify form input fields with their purpose.
- **1.3.6 Identify Purpose**: Ensure that the purpose of user interface components is programmatically determined.

### 1.4 Distinguishable
- **1.4.1 Use of Color**: Avoid using color as the sole method of conveying information (provide additional cues for those who may have difficulty perceiving color differences).
- **1.4.2 Audio Control**: Provide users with the ability to control audio (volume, muting, etc.).
- **1.4.3 Contrast (Minimum)**: Ensure sufficient contrast between text and its background.
- **1.4.4 Resize Text**: Allow users to resize text without loss of content or functionality.
- **1.4.5 Images of Text**: Avoid using images of text.
- **1.4.6 Contrast (Enhanced)**: Provide enhanced contrast to improve visibility and readability, especially in low-light conditions.
- **1.4.7 Low or No Background Audio**: Avoid or provide the option to disable background audio that may interfere with screen reader users.
- **1.4.8 Visual Presentation**: Ensure that information presented through visuals is also available in a non-visual format.
- **1.4.9 Images of Text (No Exception)**: Refrain from using images of text, even with certain exceptions.
- **1.4.10 Reflow**: Allow content to reflow and adapt to different screen sizes and resolutions (test your content against 400% zoom).
- **1.4.11 Non-text Contrast**: Ensure sufficient contrast for non-text elements, such as icons and buttons.
- **1.4.12 Text Spacing**: Provide options for adjusting text spacing.
- **1.4.13 Content on Hover or Focus**: Avoid triggering content changes or interactions solely on hover or focus.

## 2. Operable
### 2.1 Keyboard Accessible
- **2.1.1 Keyboard**: Ensure all functionality is operable through keyboard controls (navigation, input, activating elements, etc.).
- **2.1.2 No Keyboard Trap**: Avoid trapping keyboard users in any keyboard interface component (such as a modal or pop-up) that they did not explicitly choose to enter.
- **2.1.3 Keyboard (No Exception)**: Ensure keyboard functionality is consistent and available without exceptions throughout the entire content.
- **2.1.4 Character Key Shortcuts**: Avoid using character key shortcuts that could conflict with user agents and assistive technologies unless they can be disabled or remapped.

### 2.2 Enough Time
- **2.2.1 Timing Adjustable**: Provide users the ability to adjust the timing of timed content.
- **2.2.2 Pause, Stop, Hide**: Include mechanisms for users to pause, stop, or hide time-limited content, unless the content is essential or an integral part of the activity.
- **2.2.3 No Timing**: Ensure that no time-dependent actions or events occur.
- **2.2.4 Interruptions**: Make sure interruptions (updates, server responses, etc.) can be postponed/paused by the user except in the case of an emergency (data loss, connection, etc.).
- **2.2.5 Re-authenticating**: Notify users when their authenticated sessions will expire and provide options for re-authenticating without losing data.
- **2.2.6 Timeouts**: Inform users about any time limits on their input and provide sufficient time for them to complete tasks, especially for forms and surveys.

### 2.3 Seizures and Physical Reactions
- **2.3.1 Three Flashes or Below Threshold**: Limit flashing content to reduce the risk of seizures or physical discomfort.
- **2.3.2 Three Flashes**: Avoid content that flashes more than three times in any one-second period.
- **2.3.3 Animation from Interactions**: Ensure that any animation triggered by user interactions can be disabled or controlled to prevent discomfort.

### 2.4 Navigable
- **2.4.1 Bypass Blocks**: Provide mechanisms to skip repetitive content or navigation blocks, allowing users to jump to the main content (usually a 'skip to content' button immediately following search bar focus)
- **2.4.2 Page Titled**: Use informative and concise page titles that describe the content and purpose of the page.
- **2.4.3 Focus Order**: Arrange content in a logical and consistent order that follows the reading and navigation order (top left to bottom right).
- **2.4.4 Link Purpose (In Context)**: Ensure that the purpose of each link can be determined from the link text alone or from the link text and its context (don't just say "click here").
- **2.4.5 Multiple Ways**: Provide multiple ways to locate and navigate to important information or functionalities.
- **2.4.6 Headings and Labels**: Use descriptive/meaningful headings and labels to organize and structure content.
- **2.4.7 Focus Visible**: Ensure that keyboard focus is always visible and clear.
- **2.4.8 Location**: Always indicate the user's current location within a set of web pages or a complex interface.
- **2.4.9 Link Purpose (Link Only)**: Provide a clear and concise description of the purpose of each link when read out of context, such as in a list of links.
- **2.4.10 Section Headings**: Use section headings to organize content and assist users in finding and understanding information quickly.
- **2.4.11 Focus Not Obscured (Minimum)**: Ensure that moving, blinking, or scrolling content does not obscure the user's focus.
- **2.4.12 Focus Not Obscured (Enhanced)**: Go beyond the minimum requirements to ensure that the user's focus is not obscured by moving, blinking, or scrolling content.
- **2.4.13 Focus Appearance**: Make sure the appearance of the focus indicator is highly visible and distinct.

### 2.5 Input Modalities
- **2.5.1 Pointer Gestures**: Ensure that all functionality can be operated with pointer gestures for touch devices and is accessible without a physical keyboard.
- **2.5.2 Pointer Cancellation**: Allow users to cancel or undo pointer gestures to prevent accidental activation.
- **2.5.3 Label in Name**: Ensure that the visible text label of user interface components is also programmatically determined ('for' attribute).
- **2.5.4 Motion Actuation**: Do not require motion actuation (shaking device, moving camera, etc.) for functionality unless it is essential for the activity or can be disabled.
- **2.5.5 Target Size (Enhanced)**: Provide larger target sizes for touch or pointer-based inputs.
- **2.5.6 Concurrent Input Mechanisms**: Support multiple concurrent input mechanisms (such as keyboard and touch).
- **2.5.7 Dragging Movements**: Avoid requiring dragging movements, unless it is essential for the activity or can be disabled.
- **2.5.8 Target Size (Minimum)**: Ensure that interactive elements have a minimum target size.

## 3. Understandable
### 3.1 Readable
- **3.1.1 Language of Page**: Use clear and straightforward language in the content and ensure it is programmatically determined.
- **3.1.2 Language of Parts**: If the page includes content in different languages, ensure that the language of each part is programmatically determined ('lang' attribute).
- **3.1.3 Unusual Words**: Avoid using unusual words or jargon, providing explanations or definitions when necessary.
- **3.1.4 Abbreviations**: Define and explain abbreviations.
- **3.1.5 Reading Level**: Write content at a reading level that is understandable by a broad audience, considering literacy levels.
- **3.1.6 Pronunciation**: Provide pronunciations for complex or unfamiliar terms, especially in educational or instructional content.

### 3.2 Predictable
- **3.2.1 On Focus**: Ensure that changes in content or context occur only when a user initiates a change in focus (reduce unexpected interuptions).
- **3.2.2 On Input**: Avoid changes in content or context that occur automatically or on input unless it is essential for the user or requested by them.
- **3.2.3 Consistent Navigation**: Provide a consistent navigation and page structure throughout the website.
- **3.2.4 Consistent Identification**: Maintain consistent identification of user interface components and navigation (don't use different icons for the same meanings).
- **3.2.5 Change on Request**: Allow users to control changes in content, such as automatic updates, to prevent unexpected disruptions.
- **3.2.6 Consistent Help**: Ensure that help and guidance are consistently available, following the same patterns and mechanisms for all users.

### 3.3 Input Assistance
- **3.3.1 Error Identification**: Clearly identify and describe errors to users.
- **3.3.2 Labels or Instructions**: Provide clear and concise labels or instructions for form fields and user interface components.
- **3.3.3 Error Suggestion**: Offer suggestions and solutions when users make errors or encounter issues.
- **3.3.4 Error Prevention (Legal, Financial, Data)**: Implement measures to prevent errors in critical areas such as legal, financial, and data-related processes.
- **3.3.5 Help**: Ensure that users can easily access help and support.
- **3.3.6 Error Prevention (All)**: Implement measures to prevent errors and enable users to review, correct, and confirm information before finalizing actions.
- **3.3.7 Redundant Entry**: Minimize redundant data entry by auto-filling or pre-filling form fields where possible.
- **3.3.8 Accessible Authentication (Minimum)**: Implement accessible authentication methods to ensure that users with disabilities can access and use authentication features.
- **3.3.9 Accessible Authentication (Enhanced)**: Go beyond minimum requirements to enhance the accessibility of authentication methods for users with disabilities.

## 4. Robust
### 4.1 Compatible
- **4.1.2 Name, Role, Value**: Ensure that user interface components are programmatically determined and provide information about their name, role, and value to assistive technologies.
- **4.1.3 Status Messages**: Ensure that status messages are programmatically determined and conveyed to users, especially those using assistive technologies.

