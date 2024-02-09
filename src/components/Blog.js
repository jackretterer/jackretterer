import * as React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Blog = () => {
    // Sample data for blog posts
    const blogPosts = [
        { title: "Why You Are Getting Poorer and Poorer", date: "2023-01-01", slug: "/blog/blog-post-1" },
        // Add more blog posts here
    ];

    return (
        <Box sx={{ height: '100vh', backgroundColor: '#EEEEEE', padding: '5%' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black', mb: 2 }}>
                Sunday Blogs
            </Typography>
            <List>
                {blogPosts.map((post, index) => (
                    <ListItem key={index} component={RouterLink} to={post.slug} sx={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'none' }}>
                        <ListItemText primary={post.title} primaryTypographyProps={{ style: { color: 'black' } }} />
                        <ListItemText primary={post.date} primaryTypographyProps={{ style: { color: 'black' }, textAlign: 'right' }} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default Blog;
