import { ProfessionRepository } from '../src/lib/data/repository/ProfessionRepository';

const professions = ProfessionRepository.professions;

professions.forEach((p) => {
	console.log(`{{ShopLine|name=Journeyman ${p.name} Cape|buy=504000|sell=168000|level=50}}`);
	console.log(`{{ShopLine|name=Adept ${p.name} Cape|buy=1290000|sell=|level=100}}`);
	console.log(`{{ShopLine|name=Expert ${p.name} Cape|buy=3160000|sell=|level=200}}`);
	console.log(`{{ShopLine|name=Ultimate ${p.name} Cape|buy=9360000|sell=|level=500}}`);
});
