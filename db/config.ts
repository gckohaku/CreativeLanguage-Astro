import { column, defineDb, defineTable } from 'astro:db';

const contents = defineTable({
	columns: {
		content_id: column.text({primaryKey: true}),
		title: column.text(),
		created_date: column.date(),
		updated_date: column.date(),
		work_completed_date: column.date(),
		content: column.text(),
	}
});

const tags = defineTable({
	columns: {
		tag_id: column.text({primaryKey: true}),
		tag_name: column.text(),
	}
});

const images = defineTable({
	columns: {
		image_id: column.text({primaryKey: true}),
		file_path: column.text(),
	}
});

const contents_tags = defineTable({
	columns: {
		content_id: column.text({references: () => contents.columns.content_id}),
		tag_id: column.text({references: () => tags.columns.tag_id}),
	}
});

const contents_images = defineTable({
	columns: {
		content_id: column.text({references: () => contents.columns.content_id}),
		image_index: column.number(),
		image_id: column.text({references: () => images.columns.image_id}),
	}
});

// https://astro.build/db/config
export default defineDb({
	tables: { contents, tags, images, contents_tags, contents_images },
});
