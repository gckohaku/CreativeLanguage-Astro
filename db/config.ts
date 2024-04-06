import { column, defineDb, defineTable } from 'astro:db';

const contents = defineTable({
	columns: {
		content_id: column.text(),
		title: column.text(),
		created_date: column.date(),
		updated_date: column.date(),
		work_completed_date: column.date(),
		content: column.text(),
	}
});

const tags = defineTable({
	columns: {
		tag_id: column.text(),
		tag_name: column.text(),
	}
});

const images = defineTable({
	columns: {
		image_id: column.text(),
		file_path: column.text(),
	}
});

const contents_tags = defineTable({
	columns: {
		content_id: column.text(),
		tag_id: column.text(),
	}
});

const contents_images = defineTable({
	columns: {
		content_id: column.text(),
		image_index: column.number(),
	}
});

// https://astro.build/db/config
export default defineDb({
	tables: { contents, tags, images, contents_tags, contents_images }
});
