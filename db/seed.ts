import { db, contents } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(contents).values([
		{ content_id: "longSentences_2022_12", title: "長文 2022年 12月", created_date: "2024/04/04", updated_date: "2024/04/04", work_completed_date: "2022/12/24", content: "実は別のところでも公開していたりするのですが、そこでは発音の仕方なんかも公開していたりしています。$n$探してみてね$&$[img_set|1]$&$[img_set|2]$&$[img_set|3]$&$[img_set|4]$&$[img_set|5]$&$[img_set|6]$&$[img_set|7]$&$[img_set|8]$&$[img_set|9]$&$[img_set|10]" }
	]);
}
