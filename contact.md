---
layout: contact
title: Contact
permalink: /contact/
---

<div class="contact">
    <form id="contact-form">
        <div class="contact__row">
            <div class="contact__row--half">
                <input type="text" name="name" placeholder="Name *" required>
                <label for="name">Name</label>
            </div>
            <div class="contact__row--half">
                <input type="email" name="_replyto" placeholder="Email *" required>
                <label for="email">Email</label>
            </div>
        </div>
        <div class="contact__row">
            <div class="contact__row--full">
                <input type="text" name="_subject" placeholder="Subject *" required>
                <label for="subject">Subject</label>
            </div>
        </div>
        <div class="contact__row contact__row--flex">
            <div class="contact__row--full">
                <textarea type="text" name="_message" required
                    placeholder="Message..."
                ></textarea>
                <label for="message">Message</label>
            </div>
        </div>
        <div class="contact__row">
            <input type="text" name="_gotcha" style="display:none" />
            <input class="contact__row--full button" type="submit" value="Send" />
        </div>
    </form>
    <div style="display:none;" class="contact__message contact__message--sending">Sending message…</div>
    <div style="display:none;" class="contact__message contact__message--sent">
        Message sent!
        <a onClick="window.location.reload()">Send Another?</a>
    </div>
    <div style="display:none;" class="contact__message contact__message--error">
        Oops, something wasn't quite right.
        <a onclick="window.location.reload()">Go Back?</a>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js"></script>
<script src="/assets/js/contact-form.js"></script>
