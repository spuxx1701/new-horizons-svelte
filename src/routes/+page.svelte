<script>
	import CardGrid from './index/CardGrid.svelte';
	import Card from './index/Card.svelte';
	import { Settings } from '$lib/services/settings';

	const settings = Settings.instance;

	function test() {
	}
</script>

<h1>Tauche ein in die Welt von New Horizons!</h1>
<hr />
<p>
	New Horizons ist ein Pen-&-Paper-Rollenspiel, das heißt, die Spieler:innen verkörpern am
	Spieltisch fiktive Charaktere und betreten dadurch eine fantastische Welt.
</p>
<p>
	Erzählt wird diese Welt durch die Spielleiter:in, die selbst keinen eigenen Charakter verkörpert,
	stattdessen aber die gesamte belebte und unbelebte Umwelt, der die Spieler:innen während eines
	Spielabends begegnen. Die Charaktere zeichnen sich durch individuelle Eigenschaften, Fähigkeiten
	und Hintergrundgeschichten aus. Die Spieler:innen reagieren auf die Erzählung der Spielleiter:in.
	Erfolg oder Misserfolg Ihrer Aktionen werden durch Würfelproben auf Eigenschafts- und
	Fähigkeitswerte bestimmt, die auf den Charakterbögen schriftlich festgehalten werden.
</p>
<p>
	Die Spielwelt von New Horizons ist das besiedelte Sonnensystem des 23. Jahrhunderts. New Horizons
	verfolgt das Ziel, eine (aus naturwissenschaftlicher Perspektive) möglichst vorstellbare Zukunft
	zu beschreiben und erlebbar zu machen. Diese Anwendung soll es Spieler:innen ermöglichen, schnell
	und einfach Charaktere zu erstellen und zu verwalten. Daneben beinhaltet Sie mit der Stellarpedia
	ein vollständiges Nachschlagewerk für Spielregeln und Spielinhalte.
</p>

<CardGrid>
	<Card
		tooltip="Legacy Editor herunterladen"
		icon="ic:baseline-download"
		href="https://nextcloud.leopoldhock.de/s/rYtdneHSt8zxsmB"
	>
		<p>Lade Dir den Legacy Editor für Windows herunter und starte direkt in Dein Abenteuer!</p>
	</Card>
	<Card tooltip="Discord" icon="fa-brands:discord" href="https://discord.gg/anSjdatqby">
		<p>Besuche unseren Discord und werde Teil der Community von New Horizons!</p>
	</Card>
	<Card
		tooltip="GitHub"
		icon="fa-brands:github"
		href="https://trello.com/b/VMqZjDPH/new-horizons-roadmap"
	>
		<p>
			Du möchtest einen Fehler melden oder einfach wissen, woran wir gerade arbeiten und wie es
			weiter geht? Besuche uns auf GitHub.
		</p>
	</Card>
</CardGrid>

<button title="test" on:click={test}>test</button>

{settings.$userSettings}