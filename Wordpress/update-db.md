

UPDATE wp_options SET option_value = replace(option_value, 'ancienne-url', 'nouvelle-url') WHERE option_name = 'home' OR option_name = 'siteurl';
UPDATE wp_posts SET guid = replace(guid, 'ancienne-url','nouvelle-url');
UPDATE wp_posts SET post_content = replace(post_content, 'ancienne-url', 'nouvelle-url');
UPDATE wp_postmeta SET meta_value = replace(meta_value, 'ancienne-url', 'nouvelle-url');