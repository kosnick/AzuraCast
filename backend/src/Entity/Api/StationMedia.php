<?php

declare(strict_types=1);

namespace App\Entity\Api;

use App\Entity\Api\Traits\HasLinks;
use App\Entity\Api\Traits\HasSongFields;
use App\Entity\StationPlaylist;
use App\OpenApi;
use App\Traits\LoadFromParentObject;
use App\Utilities\Types;
use OpenApi\Attributes as OA;

#[OA\Schema(
    schema: 'Api_StationMedia',
    type: 'object'
)]
class StationMedia
{
    use LoadFromParentObject;
    use HasSongFields;
    use HasLinks;

    #[OA\Property(
        description: 'The media\'s identifier.',
        example: 1
    )]
    public int $id;

    #[OA\Property(
        description: "A unique identifier associated with this record.",
        example: "69b536afc7ebbf16457b8645"
    )]
    public string $unique_id = '';

    #[OA\Property(
        description: 'The media file\'s 32-character unique song identifier hash',
        example: '9f33bbc912c19603e51be8e0987d076b'
    )]
    public string $song_id = '';

    #[OA\Property(
        description: 'URL to the album art.',
        example: 'https://picsum.photos/1200/1200'
    )]
    public string $art = '';

    #[OA\Property(
        description: "The relative path of the media file.",
        example: "test.mp3"
    )]
    public string $path;

    #[OA\Property(
        description: "The UNIX timestamp when the database was last modified.",
        example: OpenApi::SAMPLE_TIMESTAMP
    )]
    public int $mtime;

    #[OA\Property(
        description: "The latest time (UNIX timestamp) when album art was updated.",
        example: OpenApi::SAMPLE_TIMESTAMP
    )]
    public int $art_updated_at = 0;

    #[OA\Property(
        description: "The song duration in seconds.",
        example: 240.00
    )]
    public float $length = 0.0;

    #[OA\Property(
        description: "The formatted song duration (in mm:ss format)",
        example: "4:00"
    )]
    public string $length_text = '0:00';

    #[OA\Property(
        type: 'array',
        items: new OA\Items(type: 'string', example: 'custom_field_value')
    )]
    public HashMap $custom_fields;

    #[OA\Property(type: "array", items: new OA\Items())]
    public HashMap $extra_metadata;

    #[OA\Property(type: "array", items: new OA\Items())]
    public array $playlists;

    public static function fromArray(
        array $row,
        array $extraMetadata = [],
        array $customFields = [],
        array $playlists = []
    ): self {
        $media = new self();

        $media->id = $row['id'];
        $media->unique_id = $row['unique_id'];
        $media->path = $row['path'];

        $media->song_id = $row['song_id'];
        $media->title = $row['title'];
        $media->artist = $row['artist'];
        $media->text = ($media->artist ?? '') . ' - ' . ($media->title ?? '');
        $media->album = $row['album'];
        $media->genre = $row['genre'];
        $media->isrc = $row['isrc'];

        $media->length = Types::int($row['length']);
        $media->length_text = self::getLengthText($row['length']);
        $media->art_updated_at = $row['art_updated_at'];

        $media->extra_metadata = new HashMap($extraMetadata);
        $media->custom_fields = new HashMap($customFields);
        $media->playlists = $playlists;

        return $media;
    }

    public static function getLengthText(string|float $length): string
    {
        $lengthInt = (int)floor(Types::float($length));
        $lengthMin = floor($lengthInt / 60);
        $lengthSec = $lengthInt % 60;

        return $lengthMin . ':' . str_pad((string)$lengthSec, 2, '0', STR_PAD_LEFT);
    }

    public static function aggregatePlaylists(array $rawPlaylists = []): array
    {
        $playlists = [];
        foreach ($rawPlaylists as $playlist) {
            $playlistId = $playlist['id'];

            if (isset($playlists[$playlistId])) {
                $playlists[$playlistId]['count']++;
            } else {
                $playlists[$playlistId] = [
                    'id' => $playlistId,
                    'name' => $playlist['name'],
                    'short_name' => StationPlaylist::generateShortName($playlist['name']),
                    'count' => 1,
                ];
            }
        }

        return array_values($playlists);
    }
}
