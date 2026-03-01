from rest_framework import serializers
from users.models import CustomUser, Profile, Connect, VerificationRequest
from posts.models import Post

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'first_name', 'last_name', 'username', 'email', 'is_staff', 'is_verified')

class ProfileConnectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Connect
        fields = ('id', 'name', 'url')

class ProfileOwnPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'post_likes_count', 'created_at')

class VerificationRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = VerificationRequest
        fields = ('id', 'first_name', 'last_name', 'content', 'birth_date', 'is_approved')
        extra_kwargs = {
            'first_name': {'read_only': True},
            'last_name': {'read_only': True},
            'content': {'read_only': True},
            'birth_date': {'read_only': True},
        }


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    posts = ProfileOwnPostSerializer(read_only=True, many=True, source='user.post')
    connects = ProfileConnectSerializer(read_only=True, many=True)

    class Meta:
        model = Profile
        fields = ('user', 'avatar', 'banner', 'bio', 'followers_count', 'following_count', 'connects', 'posts')