---
date: todo 

title: "GoToBuddy Case Study: AI Calling Application"

heroImage: "/images/case-study/goToBuddy/heroImg.webp"

overview: "GoToBuddy is an innovative software development and AI project designed to revolutionize phone interactions by enabling users to have conversations with specialized AI characters. Users can dial a specific number and choose from six distinct AI personas, each an expert in their respective field. The project also includes a comprehensive website for managing user profiles and subscriptions, ensuring a seamless user experience."
domain: "Artificial Intelligence (AI)"
url: "/projects/case-study/goToBuddy"

---

## __Technologies and Technical Specifications__
{{< case-study/technologies >}}

<img src="/images/case-study/technologies/django.png" alt="django"/>
<img src="/images/case-study/technologies/postgre.png" alt="postgres"/>
<img src="/images/case-study/technologies/aws.png" alt="aws"/>
<img src="/images/case-study/technologies/react.png" alt="React JS"/>
<img src="/images/case-study/technologies/mantine.png" alt="mantineUI"/>

{{< /case-study/technologies >}}


{{< case-study/imgCarousel >}} 
<div>
    <img src="/images/case-study/technologies/django.png" alt="django"/>
    <img src="/images/case-study/technologies/postgre.png" alt="postgres"/>
</div>

<div>
    <img src="/images/case-study/technologies/aws.png" alt="aws"/>
    <img src="/images/case-study/technologies/react.png" alt="React JS"/>
</div>
<div>
<img src="/images/case-study/technologies/mantine.png" alt="mantineUI"/>
</div>
{{< /case-study/imgCarousel >}} 


## __Integrations with Different Platforms__

{{< case-study/grid >}}

<li> Twilio </li>
<li> Twilio Streaming </li>
<li> Deepgram </li>
<li> Perplexity </li>
<li> OpenAI (GPT-4) </li>
<li> OpenAI TTS </li>
<li> Langchain </li>

{{< /case-study/grid >}}

<!-- mobile view -->
{{< case-study/integrations >}}
   <p>Twilio, Twilio Streaming, Deepgram, Perplexity, OpenAI (GPT-4), OpenAI TTS, Langchain </p>
{{< /case-study/integrations >}} 

## __Architecture:__
Describes the technical details of what happens when a user calls the AI phone number.

&nbsp;

![architecture](/images/case-study/goToBuddy/architecture.webp)

&nbsp;

The 6 distinct personas are as below: 

* __Lisa, The News Anchor:__ Provides the latest news updates and discusses current events.
* __Ben, The Storyteller:__ Narrates engaging stories and discusses literature.
* __Ethan, The Sustainable Chef:__ Offers recipes, cooking tips, and advice on sustainable eating.
* __Jack, The Sports Analyst:__ Discusses sports news, game analyses, and player statistics.
* __Chloe, The Sass Master:__ Engages in witty banter and provides fashion interactions.
* __Maya, The Coach Extraordinaire:__ Offers motivational talks and personal development advice.

&nbsp;

---

{{< case-study/caseStudySubtitle >}}
<img alt="Challenges" src="/images/case-study/icons/challenge.svg">

<h2>
    <strong>
        Understanding The Project Challenges
    </strong>
</h2>
{{< /case-study/caseStudySubtitle >}}

When the client approached us, they had a passionate vision for harnessing AI technology. They proposed creating an AI-based application capable of engaging in autonomous conversations with end users. While developing this project we faced the following challenges:

* __Natural Language Understanding and Processing:__ Ensuring the AI can accurately understand diverse user inputs and respond appropriately. Handling accents, slang, and varied speech patterns to provide a seamless conversation experience.
* __AI Persona Development:__ Creating distinct and engaging personalities for each AI character. Maintaining consistency in the character’s knowledge base, tone, and interaction style.
* __Real-Time Response and Latency:__ Achieving minimal latency in AI responses to maintain natural, real-time conversations. Ensuring high performance and reliability of the telecommunication infrastructure.
* __Approval for OTP Campaigns:__ Navigating the complexities of obtaining approval from the US government for sending OTP (One-Time Password) messages to end users. Ensuring compliance with regulatory requirements and addressing potential legal hurdles.
* __Personalization and Context Awareness:__ Implementing to personalize interactions based on user preferences and history. Ensuring the AI retains context within a conversation to provide coherent and relevant responses.
* __User Experience (UX) Design:__ Developing an intuitive and user-friendly interface for both the phone interaction system and the website. Ensuring smooth navigation and interaction flow to enhance user satisfaction.

__Tool and Model Exploration:__ Exploring and integrating various tools and models posed significant challenges:

{{< case-study/alphaContainer >}}
<ul>
    <li>Voice Audio Tools:</li>
    <ul>
    <li class='sub'>Twilio: Initially considered for communication infrastructure but lacked advanced voice synthesis capabilities.</li>
    <li class='sub'>Whisper: Tested for enhancing voice quality and naturalness in AI interactions.</li>
    <li class='sub'>Deepgram: Implemented for accurate speech recognition to improve user interaction precision.</li>
    <li class='sub'>Eleven Labs: Explored for integrating voice analytics and advanced features.</li>
    </ul>
<li> Language Models (LLMs): OpenAI v3.5 to v4 to v4.o: Transitioned to leverage advancements in natural language processing and dialogue generation. Send appropriate context to the question based on the previous conversation.</li>
<li>Function calling: Since the AI lacks real-time knowledge, it retrieves information based on user queries from an online model (Perplexity).</li>
</ul>
{{< /case-study/alphaContainer >}}


{{< case-study/caseStudySubtitle >}}
<img alt="Challenges" src="/images/case-study/icons/badge.svg">
<h2>
    <strong>
        How ScaleReal Made It Happen
    </strong>
</h2>
{{< /case-study/caseStudySubtitle >}}

__Natural Language Processing (NLP) and AI Integration__

Objective: To ensure the AI characters can understand and interact with users naturally and accurately.

* __Actions:__

{{< case-study/alphaContainer >}}
<li>Implemented state-of-the-art NLP models (e.g., fine-tuned versions of GPT-4).</li>
<li>Used top-notch third-party applications for text-to-speech and speech-to-text</li>
{{< /case-study/alphaContainer >}}

Outcomes: High accuracy in understanding user inputs. Natural, engaging, and context-aware AI responses.

&nbsp;

__User Experience (UX) Design__

Objective: To create an intuitive, user-friendly interface for both the phone interaction system and the website.

* __Actions:__

{{< case-study/alphaContainer >}}
    <li>Designed a seamless and responsive website for user profile management and subscription services.</li>
    <li>Developed a clear and straightforward phone menu for selecting AI characters.</li>
    <li>Incorporated user feedback to continually refine and enhance the design.</li>
{{< /case-study/alphaContainer >}}

Outcomes: Easy-to-navigate interfaces that enhance user satisfaction. Positive user engagement and retention.

&nbsp;

__Data Security and Privacy__ 

Objective: To protect user data and ensure compliance with data protection regulations.

* __Actions:__

{{< case-study/alphaContainer >}}
    <li>Implemented robust data encryption and security protocols.</li>
    <li>Conducted regular security and compliance checks.</li>
    <li>Developed secure systems for storing and managing personal information and call logs.</li>
{{< /case-study/alphaContainer >}}

Outcomes: High level of data security and user trust. Compliance with relevant regulations 

&nbsp;

By focusing on these three key areas, we ensured that the AI GoToBuddy project not only delivered advanced AI interactions but also provided a secure and user-friendly experience.

{{< case-study/caseStudySubtitle >}}
<img alt="Call Handling" src="/images/case-study/icons/puzzle.svg">
<h2>
    <strong>
        Call Handling and Real-Time Interaction Flow
    </strong>
</h2>
{{< /case-study/caseStudySubtitle >}}

* __Initial Call Handling:__ When a user calls the AI phone number, Twilio manages the call and forwards the request to our Python backend server via a webhook.
* __User Details Check:__ The Python service processes the webhook event to verify the user's registration status. If registered, it proceeds; otherwise, a temporary user object is created. Respond to Twilio to establish a two-way communication channel using Twilio Streaming (connect verb).
* __Establishing Data Streaming:__ Once the streaming connection is established, the user's phone continuously sends data over a WebSocket connection to our Python service through Twilio Streaming.

* __Streaming Setup and Data Handling:__
{{< case-study/alphaContainer >}}
    <ul>
        <li class="bold-marker"><strong>Database Interaction:</strong> Fetches constant details like pause times from the database in microseconds to manage sentence completion.</li>
        <li class="bold-marker"><strong>Deepgram Integration:</strong> Configures parameters to handle Twilio data, which arrives in x-mu-law encoding format with 8k samples per second.</li>
        <ul>
            <li class='sub'>Ensures streaming buffer sizes range between 20ms and 250ms of audio, compliant with Deepgram's requirements.
            </li>
        </ul>
    </ul>
{{< /case-study/alphaContainer >}}
* __Live Data Collection:__ Python service collects live data from the user in mu-law encoding format at an 8k sample rate via WebSocket. Buffers data until it reaches 20ms, then sends it to Deepgram for speech-to-text conversion.
* __Speech-to-Text Conversion:__ Deepgram converts live audio data into text. Upon reaching final speech pause time, gathers sentences and forwards them to OpenAI LLM through Langchain.
* __Query Processing:__ Transcribed text (user query) along with a prompt fetched from the database is passed to the OpenAI LLM module through Langchain. OpenAI (GPT-4.o) analyzes the query to determine if a function call is necessary, fetching the latest information via Perplexity if required.
* __Generating and Formatting the Response:__ Retrieved information is formatted into a human-readable response by OpenAI. The entire AI-generated response is processed through OpenAI TTS (whisper) for conversion from text to speech.
* __Final Response Delivery:__ Output from OpenAI TTS is base64 encoded with a 24k sample rate and converted to 8k mu-law encoding for compatibility with Twilio. Formatted audio response is sent through Twilio streaming, allowing users to hear the response in real-time on their phone.
* __Repetition for Continuous Interaction:__ Steps 5 to 9 are repeated continuously during the call, ensuring each user query is processed, answered, and delivered promptly.

&nbsp;

These steps outline the detailed process flow for handling user interactions in real-time through the AI system, integrating voice handling, speech recognition, natural language processing, and audio response delivery seamlessly.


{{< case-study/caseStudySubtitle >}}

<img alt="Challenges" src="/images/case-study/icons/keyfeatures.svg">
<h2>
    <strong>
        Key Features Of The Project
    </strong>
</h2>
{{< /case-study/caseStudySubtitle >}}

Through our development process, we introduced several key features to enhance user engagement and operational efficiency:
* __AI Greeting and Personal Context__ The AI greets users with a personal touch by addressing them by name, leveraging Google social login for user registration. The greeting message includes a fun fact about the current date and concludes with a query to engage the user. The AI maintains a summary of previous conversations, ensuring seamless context switching throughout the interaction.
* __Personas__ To enhance user engagement and interest, we introduced 6 distinct AI personas. Each persona provides responses characterized by its unique traits, ensuring varied and personalized interactions.
* __Current Updates__ Our application is powered by OpenAI's GPT-4.0. Since GPT-4.0 does not provide the latest news or current events, we integrated Perplexity AI. By using specific keywords, our system determines whether to source information from OpenAI or Perplexity based on the user's query.
* __Subscriptions__ We offer three types of subscriptions:
{{< case-study/alphaContainer >}}
<ul>
    <li>Pre-trial: Users get 5 minutes of conversation with the AI without any registration.</li>
    <li>Trial: Users must register on the website to receive 15 minutes of conversation time.</li>
    <li>Paid Subscription: For extended interaction, users can subscribe to a paid plan for unlimited conversation time.</li>
</ul>
{{< /case-study/alphaContainer >}}

&nbsp;

By refining these features, we ensure a personalized, engaging, and up-to-date experience for all users of the AI GoToBuddy system.

{{< case-study/caseStudySubtitle >}}
<img alt="Challenges" src="/images/case-study/icons/star.svg">
<h2>
    <strong>
        How ScaleReal Made A Difference
    </strong>
</h2>
{{< /case-study/caseStudySubtitle >}}

The intervention led to transformative results for GoToBuddy:

* __Advanced Technology Integration:__
{{< case-study/alphaContainer >}}
<ul>
    <li>Twilio Integration: Seamless implementation for handling calls, ensuring reliable communication channels.</li>
    <li>Deepgram Integration: Precision in speech recognition capabilities, enhancing interaction accuracy.</li>
    <li>OpenAI Models: Utilization of state-of-the-art natural language processing for dynamic and context-aware responses.</li>
</ul>
{{< /case-study/alphaContainer >}}

* __User-Centric Design Approach:__ Tailored user experiences through personalized interactions with distinct AI personas. Real-time response capabilities ensure immediate and relevant feedback to user queries.
* __Scalable Infrastructure:__ Implemented scalable infrastructure to accommodate growing user demands. Optimized data handling processes for efficient and effective operations.
* __Innovation and Adaptability:__ Constant exploration and integration of new tools and technologies to refine system functionalities. Agile development methodologies ensure adaptability to evolving project requirements and user needs.
* __Client Success and Satisfaction:__ Exceeded client expectations by delivering a robust and feature-rich AI-powered communication platform. Enhanced user engagement and satisfaction through intuitive design and seamless functionality.
* __Beta Launch:__ The application has successfully catered to approximately 50-100 users during the beta launch phase. We received overwhelmingly positive feedback, highlighting the system's engaging interactions and seamless user experience. Users appreciated the personalized greetings, context-aware conversations, and diverse AI personas. 

{{< case-study/caseStudySubtitle >}}
<img alt="Challenges" src="/images/case-study/icons/conclusion.svg">
<h2>
    <strong>
        Conclusion
    </strong>
</h2>
{{< /case-study/caseStudySubtitle >}}

Scalereal's partnership with GoToBuddy has been transformative. Integrating Twilio for seamless calls, Deepgram for accurate speech recognition, and OpenAI's latest models has created a robust platform. Personalized interactions through AI personas and real-time responses have enhanced user engagement. Scalable infrastructure ensures readiness for growth, underscoring Scalereal's commitment to AI innovation and client success.

&nbsp;

This case study exemplifies Scalereal's dedication to pushing the boundaries of AI technology to deliver exceptional user experiences and drive meaningful business outcomes.
