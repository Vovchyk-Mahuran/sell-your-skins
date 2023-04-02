// Types
import { FaqCategory } from 'core/enums/faq-category.enum';
import { FaqItem } from 'core/types/faq-item.type';

export const FAQ_DATA: FaqItem[] = [
	{
		id: crypto.randomUUID(),
		title: 'How can I contact SkinsDeals?',
		category: FaqCategory.General,
		content: `<p>Regarding technical issues, it is best you contact us via e-mail: <strong>contact@sellyourskins.com</strong></p> 
			<p>For business inquiries, contact us at: <strong>business@sellyourskins.com</strong></p>
			<p>We kindly ask not to contact us via social media (Facebook, Instagram, Twitter) regarding technical issues.</p>
			<p><strong>Please also do not send your message in multiple places as this will substantially slow down the answer!</strong></p>`,
	},
	{
		id: crypto.randomUUID(),
		title: 'How can I use a referral code?',
		category: FaqCategory.Payments,
		content: `<p>To use a referral code and receive your welcome bonus of 3%, find the '<strong>BONUS CODE'</strong> section on the top navbar, enter the code and click "Use code".</p>
		<p>Your bonus will appear automatically :)</p>`,
	},
	{
		id: crypto.randomUUID(),
		title: "I haven't received any confirmation e-mails.",
		category: FaqCategory.Popular,
		content: `<p><strong>If you haven't received any confirmation e-mails - don't worry!</strong> In 99% of the cases this is the mail server being overloaded :)</p>
		<p>In this case, just observe your wallet for an incoming transaction.</p>
		<p>If you have neither not received the funds or any e-mails for a long time, please contact us. You might have fallen victim of a phishing / Steam API scam. Our team will do its best to help you protect your account!</p>`,
	},
	{
		id: crypto.randomUUID(),
		title: "My inventory won't load on the site / Trade URL is incorrect.",
		category: FaqCategory.Popular,
		content: `<p>If your inventory won't load or your Trade URL returns an error, please make sure that the all the following are true for your account:</p>
		<p>(https://steamcommunity.com/my/edit/settings)</p>
		<p>- your profile is set to <strong>Public&nbsp;</strong></p>
		<p>- your inventory is set to <strong>Public&nbsp;</strong></p>
		<p>- you have entered a <strong>correct Trade URL</strong> in the Settings tab (find your URL)</p>
		<p>If all the aforementioned steps are completed and you are still facing issues, please contact us! We'll do our best to help :)</p>`,
	},
	{
		id: crypto.randomUUID(),
		title: "I've entered wrong payment details. What should I do?",
		category: FaqCategory.Popular,
		content: `<p><strong>First of all, don't panic! 😊</strong></p>
		<p>A major part of our payments have systems detecting wrong payment details format and stopping the payments from being processed.</p>
		<p>Please contact us via e-mail at: <strong>contact@sellyourskins.com</strong> and provide us with as much information as possible, so we can check on your case.</p>
		<p>We will do whatever we can to help you recover your funds and forward them to correct data, but please note that if what you provided was correct data of someone else's, we may not be able to recover a finalized transfer (via bank transfer, PayPal, etc.)</p>`,
	},
	{
		id: crypto.randomUUID(),
		title: 'Why should I trust you? Is this a scam?',
		category: FaqCategory.General,
		content: `<p>Our site has been operating since 2019, serving nearly <strong>40.000 users</strong> in over <strong>5.000 transactions</strong> worth over <strong>440.000 USD!</strong></p>
		<p>These are some pretty nice numbers, but if it still doesn't convince you, we have been and still are actively working with a wide range of popular YouTubers with both international and regional audiences. Take a look at the "<strong>THEY TALKED ABOUT US:</strong>" tab on the main page :)</p><p>Apart from the marketing activities, we are also a legally registered and regulated entity, details of which you can find in our Legal tabs. You don't have to worry with dealing with some unknown, unregistered service provider, you know what you get.</p>`,
	},
	{
		id: crypto.randomUUID(),
		title: 'What is the minimum item and transaction value?',
		category: FaqCategory.Payments,
		content: `<p><strong>Current minimum requirements:</strong></p>
		<p>- minimum item value: <strong>0.5$ </strong></p>
		<p>- minimum transaction value: <strong>2.5$</strong></p>
		<p>Please note, that some payment methods may require a higher minimum transaction value, because of their fees.</p>`,
	},
	{
		id: crypto.randomUUID(),
		title: "I didn't receive my money. HELP!",
		category: FaqCategory.Popular,
		content: `<p><strong>First of all, please don't panic or contact us straight away.</strong></p>
		<p><strong>Please allow some time for your payment to get processed. In most cases, a minute or two does the whole work :)</strong></p>
		<p>Note, that while we send the funds instantly, there are multiple factors that can increase the delivery time, such as a queue of processing payments in our system or the payment provider's system.</p>
		<p>If you have not received your wallet transfer within an hour (which rarely happens), contact us and we will do our best to help! 😊</p>`,
	},
	{
		id: crypto.randomUUID(),
		title: 'How long do I need to wait for the payment?',
		category: FaqCategory.Payments,
		content: `<p>All of the offered payment methods are sent out by us <strong>instantly</strong>. This means that your funds should be fully visible on your chosen payment wallet within 5 minutes of a received success (payment sent) e-mail.</p>
		<p>Please note that if you chose <strong>Bank Transfer,&nbsp;</strong>the transfer time depends strictly on your bank. If it supports Instant SEPA Transfers, then it should be a matter of minutes. If not, it might take up to 1-2 business days.</p>
		<p>Also, <strong>cryptocurrencies&nbsp;</strong>may require a few block confirmations to appear on your wallet. This time depends on the type of cryptocurrency and the current load on its network. If you haven't received your crypto, allow it for 15-30 minutes to get fully confirmed.</p>`,
	},
	{
		id: crypto.randomUUID(),
		title: 'What payment methods are available?',
		category: FaqCategory.Payments,
		content: `<p><strong>The currently offered payment methods are:</strong><br>- PayPal&nbsp;<br>- Bank Transfers to over 70 countries<br>- AdvCash&nbsp;<br>- QIWI&nbsp;<br>- WebMoney&nbsp;<br>- AirTM&nbsp;<br>- YooMoney&nbsp;<br>- Skrill&nbsp;<br>- PIX<br>- VISA/MasterCard (Ukraine issued only)</p>
		<p><strong>Cryptocurrencies:</strong><br>Bitcoin, Ethereum, Litecoin, Tether ERC-20, Bitcoin Cash, Dogecoin, Tron<br><br>Please note that some payment methods may be charged with additional fees, as indicated on the Website, upon choosing each payment method.</p>`,
	},
	{
		id: crypto.randomUUID(),
		title: 'Is the price negotiable?',
		category: FaqCategory.General,
		content: `<p><strong>Unfortunately, NO. </strong>The prices visible to you are not negotiable, yet keep in mind there are a few exceptions from this rule:</p>
		<p>- you can contact us if you clearly believe you've experienced a pricing <strong>BUG</strong>, that is if your 1000$ knife is worth 0.01$; while this is <strong>extremely unlikely</strong>, if it happens, contact us ASAP!<br><br>- if you are looking to <strong>supply in bulk</strong> - wholesale quantities of items (10.000$+/mo.) - whether you are a physical or a legal entity willing to partner in B2B model, write us at: <strong>wholesale@sellyourskins.com</strong></p>`,
	},
	{
		id: crypto.randomUUID(),
		title: 'How much will you offer for my skins?',
		category: FaqCategory.General,
		content: `<p><strong>The prices we will offer for your items depends on a variety of elements, including:</strong></p>
		<p>- item's popularity (how often is it traded)</p><p>- item's liquidity (how difficult it is to sell)</p>
		<p>- price range (is it a low/mid/high tier item)</p>
		<p>- the current prices biggest marketplaces, including but not limited to Steam Community Market</p><p>We always try to provide you with the best price possible and fair fee for us. Please note that some kinds of items may have lowered prices due to high volatility or unusual item type.</p>
		<p><strong>We do our best to offer the best prices out of all instant cashout markets! :)</strong></p>`,
	},
	{
		id: crypto.randomUUID(),
		title: 'Can I get real money for my skins?',
		category: FaqCategory.General,
		content: `<p><strong>YES!&nbsp;</strong>That is exactly why we have created SellYourSkins.com for your convenience.&nbsp;</p>
		<p>While you can use the Steam Community Market to sell your items for virtual funds, these can be used only within the platform, to buy games or other items - with our service you get the <strong>REAL CASH</strong> straight to your pocket! 🤑<br><br>Try us out now!</p>`,
	},
	{
		id: crypto.randomUUID(),
		title: 'How does it work?',
		category: FaqCategory.General,
		content: `<p><strong>It's pretty simple. We exchange your skins for real cash!</strong></p>
		<p>First of all you need to log onto the site with your Steam account and fill in your e-mail address and Steam Trade URL.</p>
		<p>Once you've done that, your inventory will be loaded with the prices we can offer for each of your items.</p>
		<p>After you finish the transaction process and we receive your item(s), your money will be sent to you via the selected payment method 😊</p>`,
	},
	{
		id: crypto.randomUUID(),
		title: 'What is SellYourSkins.com?',
		category: FaqCategory.General,
		content: `<p><strong>SellYourSkins.com is a site that allows you to sell your virtual items, such as CS:GO skins for real cash.</strong> Cashout to your PayPal, Bank Account, a wide variety of online wallets and cards or cryptocurrencies in an easy and safe way - it takes just a few steps:</p>
		<p>- select the items you want to sell,</p>
		<p>- fill in your payment details,</p>
		<p>- accept the offer from our bot,</p>
		<p><strong>...and voila!</strong> The cash is in your pocket. It couldn't get much easier&nbsp;<span style="font-family: 'Segoe UI Emoji', sans-serif; font-size: 11pt;">😄</span></p>`,
	},
];
